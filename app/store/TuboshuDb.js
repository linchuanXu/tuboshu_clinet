import fs from 'fs';
import path from 'path';

/**
 * TuboshuDb - 轻量级文档数据库
 * 支持集合管理、索引、持久化等功能
 */
class TuboshuDb {
    static instances = new Map();

    static getInstance(filePath, options = {}) {
        if (!this.instances.has(filePath)) {
            this.instances.set(filePath, new TuboshuDb(filePath, options));
        }
        return this.instances.get(filePath);
    }

    constructor(filePath, options = {}) {
        this.filePath = filePath;
        this.collections = new Map();
        this.autosave = options.autosave || false;
        this.autosaveInterval = options.autosaveInterval || 1000;

        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        if (options.autoload) {
            this.loadDatabase();
            if (options.autoloadCallback) {
                options.autoloadCallback();
            }
        }

        // 设置自动保存定时器
        if (this.autosave) {
            this.autosaveTimer = setInterval(() => {
                this.saveDatabase();
            }, this.autosaveInterval);
        }
    }

    loadDatabase() {
        try {
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                const dbData = JSON.parse(data);

                // 恢复集合数据
                if (dbData.collections) {
                    Object.entries(dbData.collections).forEach(([name, collectionData]) => {
                        const collection = this.createOrRestoreCollection(name, collectionData);
                        this.collections.set(name, collection);
                    });
                }
            }
        } catch (error) {
            console.warn('Failed to load database:', error.message);
            // 如果文件损坏或不存在，创建空数据库
            this.collections.clear();
        }
    }

    /**
     * 序列化集合数据的公共函数
     * @returns {Object} 序列化后的数据库数据
     */
    serializeCollections() {
        const dbData = {
            collections: {}
        };

        for (const [name, collection] of this.collections) {
            dbData.collections[name] = {
                options: collection.options,
                data: collection.data,
                version: collection.version,
                update_at: collection.update_at
            };
        }

        return dbData;
    }

    /**
     * 执行带重试机制的操作
     * @param {Function} operation - 要执行的操作函数
     * @param {number} maxRetries - 最大重试次数
     * @param {number} retryDelay - 重试延迟时间（毫秒）
     * @param {string} operationName - 操作名称（用于日志）
     * @returns {boolean} 操作是否成功
     */
    executeWithRetry(operation, maxRetries = 3, retryDelay = 300, operationName = '操作') {
        let lastError;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                operation();
                return true;
            } catch (error) {
                lastError = error;
                console.warn(`${operationName}失败 (尝试 ${attempt}/${maxRetries}):`, error.message);

                if (attempt < maxRetries) {
                    const start = Date.now();
                    while (Date.now() - start < retryDelay) {}
                }
            }
        }

        console.error(`${operationName}失败，已达到最大重试次数:`, lastError);
        return false;
    }

    /**
     * 保存数据库到文件（带重试机制）
     * @returns {boolean} 保存是否成功
     */
    saveDatabase() {
        return this.executeWithRetry(() => {
            const dbData = this.serializeCollections();
            fs.writeFileSync(this.filePath, JSON.stringify(dbData));
        }, 3, 300, '保存数据库');
    }

    // 获取集合
    getCollection(name) {
        return this.collections.get(name.toLowerCase());
    }

    // 检查集合是否存在
    hasCollection(name) {
        return this.collections.has(name.toLowerCase());
    }

    // 添加新集合
    addCollection(name, options = {}) {
        const lowerName = name.toLowerCase();
        if (this.collections.has(lowerName)) {
            return this.collections.get(lowerName);
        }

        const collection = new Collection(name, options);
        collection.setDatabase(this);
        this.collections.set(lowerName, collection);
        this.saveDatabase();
        return collection;
    }

    // 删除集合
    removeCollection(name) {
        const lowerName = name.toLowerCase();
        if (this.collections.has(lowerName)) {
            this.collections.delete(lowerName);
            this.saveDatabase();
            return true;
        }
        return false;
    }

    // 关闭数据库（停止自动保存并执行最终保存）
    close() {
        if (this.autosaveTimer) {
            clearInterval(this.autosaveTimer);
        }
        this.saveDatabase();
    }

    /**
     * 获取所有数据（读取整个数据库）
     * @returns {Object} 完整的数据库数据
     */
    getAllData() {
        return this.serializeCollections();
    }

    /**
     * 创建或恢复集合的公共函数
     * @param {string} name - 集合名称
     * @param {Object} collectionData - 集合数据
     * @returns {Collection} 创建的集合实例
     * @throws {Error} 如果索引配置无效
     */
    createOrRestoreCollection(name, collectionData) {
        // 验证索引配置（数据恢复时也要验证）
        const tempCollection = { options: collectionData.options || {} };
        Collection.prototype.validateIndexConfiguration.call(tempCollection);

        const collection = new Collection(name, collectionData.options || {});
        collection.setDatabase(this);
        collection.data = collectionData.data || [];
        collection.version = collectionData.version || 0;
        collection.update_at = collectionData.update_at || Math.floor(Date.now() / 1000);

        // 重建索引
        collection.rebuildIndices();

        return collection;
    }

    /**
     * 替换所有数据（用新数据替换本地数据并写入磁盘）
     * @param {Object} newData - 新的数据库数据
     * @returns {boolean} 是否有变化并成功保存
     */
    replaceAllData(newData) {
        let hasChanges = false;

        if (newData.collections) {
            // 处理传入的集合数据
            Object.entries(newData.collections).forEach(([name, collectionData]) => {
                const lowerName = name.toLowerCase();
                const localCollection = this.collections.get(lowerName);

                // 如果本地存在该集合，比较版本号
                if (localCollection) {
                    const incomingVersion = collectionData.version || 0;
                    // 只有传入的版本号大于本地版本号时才替换
                    if (incomingVersion > localCollection.version) {
                        localCollection.data = collectionData.data || [];
                        localCollection.version = incomingVersion;
                        localCollection.update_at = collectionData.update_at || Math.floor(Date.now() / 1000);
                        localCollection.rebuildIndices();
                        hasChanges = true;
                    }
                } else {
                    // 如果本地不存在该集合，直接创建新集合
                    const collection = this.createOrRestoreCollection(name, collectionData);
                    this.collections.set(lowerName, collection);
                    hasChanges = true;
                }
            });

            // 删除本地存在但传入数据中不存在的集合
            const incomingCollectionNames = Object.keys(newData.collections).map(name => name.toLowerCase());
            for (const [name] of this.collections) {
                if (!incomingCollectionNames.includes(name)) {
                    this.collections.delete(name);
                    hasChanges = true;
                }
            }
        }

        // 如果有变化才保存到磁盘，否则返回false表示拒绝替换
        if (hasChanges) {
            return this.saveDatabase();
        } else {
            return false;
        }
    }

    // 如果需要，保存数据库
    saveIfNeeded() {
        if (!this.autosave) {
            return this.saveDatabase();
        }
        return true;
    }
}

/**
 * 集合类 - 管理文档集合
 */
class Collection {
    constructor(name, options = {}) {
        this.name = name;
        this.options = options;
        this.data = [];
        this.indices = new Map();
        this.db = null;
        this.update_at = Math.floor(Date.now() / 1000);
        this.version = 0;

        // 验证索引配置
        this.validateIndexConfiguration();

        // 初始化索引
        this.initializeIndices();
    }

    /**
     * 验证索引配置的合法性
     * @throws {Error} 如果存在字段冲突
     */
    validateIndexConfiguration() {
        const indices = this.options.indices || [];
        const unique = this.options.unique || [];

        // 检查是否有字段同时在普通索引和唯一索引中
        const duplicateFields = indices.filter(field => unique.includes(field));

        if (duplicateFields.length > 0) {
            throw new Error(
                `索引配置错误：字段 [${duplicateFields.join(', ')}] ` +
                `不能同时作为普通索引和唯一索引。` +
                `请检查 indices 和 unique 选项的配置。`
            );
        }

        // 检查索引字段是否为有效字符串
        [...indices, ...unique].forEach(field => {
            if (typeof field !== 'string' || field.trim() === '') {
                throw new Error(`索引字段名必须是非空字符串，当前值: ${field}`);
            }
        });
    }

    /**
     * 初始化索引的公共函数
     */
    initializeIndices() {
        // 初始化普通索引
        if (this.options.indices) {
            this.options.indices.forEach(field => {
                this.indices.set(field, new Map());
            });
        }

        // 初始化唯一索引
        if (this.options.unique) {
            this.options.unique.forEach(field => {
                this.indices.set(field, new Map());
            });
        }
    }

    /**
     * 重建所有索引（用于数据恢复后）
     */
    rebuildIndices() {
        // 清空现有索引
        this.indices.clear();

        // 重新初始化索引结构
        this.initializeIndices();

        // 为所有现有文档重建索引
        this.data.forEach(doc => {
            this.updateIndices(doc);
        });
    }

    /**
     * 检查唯一索引冲突
     * @param {Object} doc - 要检查的文档
     * @returns {Object} 返回 { existingIndex: number, conflictField: string }
     */
    checkUniqueConstraints(doc) {
        let existingIndex = -1;
        let conflictField = null;

        if (this.options.unique) {
            for (const field of this.options.unique) {
                const fieldValue = doc[field];
                if (fieldValue !== undefined && fieldValue !== null) {
                    const indexMap = this.indices.get(field);
                    if (indexMap && indexMap.has(fieldValue)) {
                        existingIndex = indexMap.get(fieldValue);
                        conflictField = field;
                        break;
                    }
                }
            }
        }

        return { existingIndex, conflictField };
    }

    /**
     * 处理文档插入逻辑
     * @param {Object} newDoc - 要插入的文档
     * @returns {Object} 插入的文档
     */
    processDocumentInsertion(newDoc) {
        // 检查唯一索引冲突
        const { existingIndex } = this.checkUniqueConstraints(newDoc);

        // 处理冲突：替换现有文档
        if (existingIndex > -1 && existingIndex < this.data.length) {
            const oldDoc = this.data[existingIndex];
            // 保留原有的$tbs值
            newDoc.$tbs = oldDoc.$tbs;
            // 先删除旧索引
            this.removeFromIndices(oldDoc);
            // 替换数据
            this.data[existingIndex] = newDoc;
            // 更新索引
            this.updateIndices(newDoc);
            return newDoc;
        }

        // 无冲突时新增文档
        newDoc.$tbs = this.data.length + 1;
        this.data.push(newDoc);
        this.updateIndices(newDoc);
        return newDoc;
    }

    /**
     * 查询文档的公共逻辑
     * @param {Object} query - 查询条件
     * @param {Object} doc - 要检查的文档
     * @returns {boolean} 是否匹配
     */
    matchesQuery(query, doc) {
        return Object.entries(query).every(([key, value]) => {
            return doc[key] === value;
        });
    }

    // 更新集合元数据
    updateCollectionMeta() {
        this.update_at = Math.floor(Date.now() / 1000);
        this.version += 1;
    }

    /**
     * 插入新文档（带唯一索引校验）
     * @param {Object|Array} doc - 要插入的文档或文档数组
     * @returns {Object|Array} 插入的文档或文档数组
     */
    insert(doc) {
        this.updateCollectionMeta();

        if (Array.isArray(doc)) {
            const documents = [];
            doc.forEach((d) => {
                documents.push(this.processDocumentInsertion({ ...d }));
            });
            this.db.saveIfNeeded();
            return documents;
        }

        const result = this.processDocumentInsertion({ ...doc });
        this.db.saveIfNeeded();
        return result;
    }

    /**
     * 查找文档
     * @param {Object} query - 查询条件
     * @returns {Array} 匹配的文档数组
     */
    find(query = {}) {
        return this.data.filter(doc => this.matchesQuery(query, doc));
    }

    /**
     * 查找单个文档
     * @param {Object} query - 查询条件
     * @returns {Object|undefined} 第一个匹配的文档
     */
    findOne(query) {
        return this.data.find(doc => this.matchesQuery(query, doc));
    }

    /**
     * 查找并更新文档
     * @param {Object} query - 查询条件
     * @param {Function} updateFn - 更新函数
     * @returns {Array} 更新的文档数组
     */
    findAndUpdate(query, updateFn) {
        this.updateCollectionMeta();

        const docs = this.find(query);
        docs.forEach(doc => {
            const index = this.data.findIndex(d => d.$tbs === doc.$tbs);
            if (index !== -1) {
                const oldDoc = { ...this.data[index] };
                updateFn(this.data[index]);
                this.updateIndices(this.data[index], oldDoc);
            }
        });

        this.db.saveIfNeeded();
        return docs;
    }

    /**
     * 查找并删除文档
     * @param {Object} query - 查询条件
     * @returns {Array} 删除的文档数组
     */
    findAndRemove(query) {
        this.updateCollectionMeta();

        const docs = this.find(query);
        docs.forEach(doc => {
            const index = this.data.findIndex(d => d.$tbs === doc.$tbs);
            if (index !== -1) {
                this.removeFromIndices(this.data[index]);
                this.data.splice(index, 1);
            }
        });

        this.db.saveIfNeeded();
        return docs;
    }

    /**
     * 更新文档 - 根据主键查找并替换，找不到则什么也不做
     * @param {Object} doc - 要更新的文档
     * @returns {Object|null} 更新后的文档，如果没有找到则返回null
     */
    update(doc) {
        if (!doc || typeof doc !== 'object') {
            throw new Error('文档参数无效：必须是一个对象');
        }

        if (doc.$tbs === undefined || doc.$tbs === null) {
            return null;
        }

        const existingIndex = this.data.findIndex(d => d.$tbs === doc.$tbs);
        if (existingIndex === -1) {
            return null;
        }

        this.updateCollectionMeta();
        const oldDoc = { ...this.data[existingIndex] };

        if (this.options.unique) {
            for (const field of this.options.unique) {
                const newValue = doc[field];
                if (newValue !== undefined && newValue !== null) {
                    const indexMap = this.indices.get(field);
                    if (indexMap && indexMap.has(newValue)) {
                        const conflictIndex = indexMap.get(newValue);
                        if (conflictIndex !== existingIndex) {
                            throw new Error(`唯一索引冲突：字段 '${field}' 的值 '${newValue}' 已存在`);
                        }
                    }
                }
            }
        }

        this.removeFromIndices(oldDoc);
        this.data[existingIndex] = { ...doc };
        this.updateIndices(this.data[existingIndex]);

        this.db.saveIfNeeded();
        return this.data[existingIndex];
    }

    /**
     * 更新索引
     * @param {Object} doc - 要更新索引的文档
     * @param {Object} oldDoc - 旧文档（可选）
     */
    updateIndices(doc, oldDoc = null) {
        if (oldDoc) {
            this.removeFromIndices(oldDoc);
        }

        for (const [field, indexMap] of this.indices) {
            if (doc[field] !== undefined && doc[field] !== null) {
                if (this.options.unique?.includes(field)) {
                    // 唯一索引：存储文档在data数组中的索引
                    const docIndex = this.data.findIndex(d => d.$tbs === doc.$tbs);
                    if (docIndex !== -1) {
                        indexMap.set(doc[field], docIndex);
                    }
                } else {
                    // 普通索引：存储文档数组
                    if (!indexMap.has(doc[field])) {
                        indexMap.set(doc[field], []);
                    }
                    const docArray = indexMap.get(doc[field]);
                    // 避免重复添加
                    if (!docArray.find(d => d.$tbs === doc.$tbs)) {
                        docArray.push(doc);
                    }
                }
            }
        }
    }

    /**
     * 从索引中移除文档
     * @param {Object} doc - 要移除的文档
     */
    removeFromIndices(doc) {
        for (const [field, indexMap] of this.indices) {
            if (doc[field] !== undefined && doc[field] !== null && indexMap.has(doc[field])) {
                if (this.options.unique?.includes(field)) {
                    // 唯一索引：直接删除键值对
                    indexMap.delete(doc[field]);
                } else {
                    // 普通索引：从数组中移除文档
                    const docs = indexMap.get(doc[field]);
                    const index = docs.findIndex(d => d.$tbs === doc.$tbs);
                    if (index !== -1) {
                        docs.splice(index, 1);
                        if (docs.length === 0) {
                            indexMap.delete(doc[field]);
                        }
                    }
                }
            }
        }
    }

    /**
     * 获取文档数量
     * @returns {number} 文档数量
     */
    count() {
        return this.data.length;
    }

    /**
     * 清空集合数据
     */
    clear() {
        this.updateCollectionMeta();
        this.data = [];

        // 根据历史经验教训：重新初始化索引而不是清空
        this.indices.clear();
        this.initializeIndices();

        this.db.saveDatabase();
    }

    /**
     * 链式查询
     * @returns {Object} 链式查询对象
     */
    chain() {
        let currentResults = [...this.data];

        const chainObj = {
            find: (query) => {
                currentResults = currentResults.filter(doc => this.matchesQuery(query, doc));
                return chainObj;
            },
            simplesort: (field, options = {}) => {
                const desc = options.desc || false;
                currentResults.sort((a, b) => {
                    if (a[field] < b[field]) return desc ? 1 : -1;
                    if (a[field] > b[field]) return desc ? -1 : 1;
                    return 0;
                });
                return chainObj;
            },
            limit: (count) => {
                currentResults = currentResults.slice(0, count);
                return chainObj;
            },
            data: () => currentResults
        };

        return chainObj;
    }

    /**
     * 设置数据库引用
     * @param {TuboshuDb} db - 数据库实例
     */
    setDatabase(db) {
        this.db = db;
    }
}

export default TuboshuDb;