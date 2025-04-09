import {app, nativeImage} from 'electron'
import crypto from 'crypto'
import path from 'path'
import Loki from 'sylviejs'
import CONS from '../constants.js'

const dbPath = path.join(app.getPath('userData'),  'data.db');
console.log('Database Path:', dbPath);
const md5Hash = (data) => crypto.createHash('md5').update(data).digest('hex');
const processImg = (menuArray) => menuArray.map(element => {
    if(element.img.startsWith("data:")) return element;
    if(element.img.includes("preview_default")) element.img = CONS.PREVIEW_IMG;

    const imagePath = CONS.PATH.APP_PATH +""+ element.img;
    const Img = nativeImage.createFromPath(imagePath);
    return { ...element, img: Img.toDataURL()};
});

class LokiManager {

    constructor(db) {
        this.db = db;
    }

    static async create() {
        const db = await new Promise((resolve, reject) => {
            const dbInstance = new Loki(dbPath, {
                autoload: true,
                autoloadCallback: () => {
                    resolve(dbInstance);
                },
                autosave: true,
                autosaveInterval: 5000,
            });
        });

        const manager = new LokiManager(db);
        manager.initializeCollections();
        return manager;
    }

    initializeCollections(){
        if (!this.db.getCollection('sites')) {
            const sitesCollection = this.db.addCollection('sites', { indices: ['name'], unique: ['name'] });

            if (sitesCollection.count() === 0) {
                sitesCollection.insert(CONS.SITES);
                this.db.saveDatabase();
            }
        }

        if (!this.db.getCollection('shortcuts')) {
            const sitesCollection = this.db.addCollection('shortcuts', { indices: ['name'], unique: ['name'] });

            if (sitesCollection.count() === 0) {
                sitesCollection.insert(CONS.SHORTCUT);
                this.db.saveDatabase();
            }
        }
    }

    // 方法无需再等待，因为初始化已完成
    getSites() {
        const sitesCollection = this.db.getCollection('sites');
        return sitesCollection.chain().find({}).simplesort('order', { desc: false }).data();
    }

    clearSites() {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.clear();
        this.db.saveDatabase();
    }

    getSite(name) {
        const sitesCollection = this.db.getCollection('sites');
        return sitesCollection.findOne({name: name});
    }

    addSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        site.order = sitesCollection.count() + 1;
        site.name = md5Hash(site.name.trim()+""+ Date.now());
        sitesCollection.insert(site);
        this.db.saveDatabase();
        return site;
    }

    updateSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.findAndUpdate({name: site.name}, (doc)=>{Object.assign(doc, site)});
        this.db.saveDatabase();
    }

    batchUpdateSite(sites) {
        if(sites.length === 0) return;
        sites.forEach(site => {
            this.updateSite(site)
        });
    }

    removeSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.findAndRemove({name: site.name});
        this.db.saveDatabase();
    }

    getMenus() {
        let sites = this.getSites();
        if(sites.length === 0) sites = CONS.SITES;
        return {
            openMenus : processImg(sites.filter(site => site.isOpen)),
            closeMenus: processImg(sites.filter(site => !site.isOpen)),
            setMenus : processImg(CONS.SETTING)
        }
    }

    getShortcuts() {
        const shortcutCollection = this.db.getCollection('shortcuts');
        return shortcutCollection.chain().find({}).simplesort('isOpen', { desc: true }).data();
    }

    getShortcut(name) {
        const shortcutCollection = this.db.getCollection('shortcuts');
        return shortcutCollection.findOne({name: name});
    }

    updateShortcut(shortcut) {
        const shortcutCollection = this.db.getCollection('shortcuts');
        shortcutCollection.findAndUpdate({name: shortcut.name}, (doc)=>{Object.assign(doc, shortcut)});
        return this.db.saveDatabase();
    }

    addShortcut(shortcut) {
        const shortcutCollection = this.db.getCollection('shortcuts');
        shortcutCollection.insert(shortcut);
        return this.db.saveDatabase();
    }
}

// 使用方式
export default LokiManager.create();