// document.addEventListener('file-path',  function(e) {
//     console.log(' 获取到文件路径:', e.detail.path);
//     // 使用文件路径...
// });

(function() {
    const style = document.createElement('style');
    style.textContent  = `
        .electron-file-path-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            pointer-events: none;
        }
        
        .electron-file-path-dropzone {
            padding: 40px;
            border: 4px dashed #fff;
            border-radius: 10px;
            color: white;
            font-size: 24px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
    const overlay = document.createElement('div');
    overlay.className  = 'electron-file-path-overlay';

    const dropzone = document.createElement('div');
    dropzone.className  = 'electron-file-path-dropzone';
    dropzone.textContent  = getTipText();

    overlay.appendChild(dropzone);
    document.body.appendChild(overlay);

    function isWindows(){
        return navigator.platform.toLowerCase().startsWith('win')
    }
    function getTipText(){
        if(isWindows()){
            return '支持EXE|快捷方式|文件夹';
        }else{
            return '非Windows系统暂不支持';
        }
    }
    function init() {
        document.addEventListener('dragenter',  handleDragEnter);
        document.addEventListener('dragleave',  handleDragLeave);
        document.addEventListener('dragover',  handleDragOver);
        document.addEventListener('drop',  handleDrop);
    }
    function handleDragEnter(e) {
        e.preventDefault();
        overlay.style.display  = 'flex';
    }
    function handleDragLeave(e) {
        if (e.clientX  <= 0 || e.clientX  >= window.innerWidth  ||
            e.clientY  <= 0 || e.clientY  >= window.innerHeight)  {
            overlay.style.display  = 'none';
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        overlay.style.display  = 'none';
        if ((e.dataTransfer.files.length  > 0) && isWindows()) {
            const file = e.dataTransfer.files[0];
            processFile(file);
        }
    }

    function processFile(file) {
        const filePath = window.myApi.getFilePath(file);
        const event = new CustomEvent('file-path', {
            detail: {
                path: filePath,
                file: file
            }
        });
        document.dispatchEvent(event);
    }
    window.myUpload = {init: init};
})();

(function (){
    class OperationNotifier {
        constructor() {}

        init(options = {}) {
            // 默认配置
            const defaults = {
                position: 'top-center', // 提示位置：top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
                duration: 3000,       // 显示持续时间(毫秒)
                successColor: '#4CAF50', // 成功提示颜色
                errorColor: '#F44336',   // 失败提示颜色
                textColor: '#FFFFFF',    // 文字颜色
                fontSize: '14px',        // 文字大小
                borderRadius: '4px',     // 圆角大小
                padding: '10px 20px',    // 内边距
                zIndex: 9999,            // z-index值
                animationDuration: 300   // 动画持续时间(毫秒)
            };
            this.settings = { ...defaults, ...options };
            this.createContainer();
        }
        createContainer() {
            this.container = document.createElement('div');
            this.container.className = 'operation-notifier-container';

            // 设置容器样式
            Object.assign(this.container.style, {
                position: 'fixed',
                [this.getPositionProperty()]: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: this.getAlignItems(),
                gap: '10px',
                zIndex: this.settings.zIndex
            });

            document.body.appendChild(this.container);
        }

        getPositionProperty() {
            return this.settings.position.includes('top') ? 'top' : 'bottom';
        }

        getAlignItems() {
            if (this.settings.position.includes('left')) return 'flex-start';
            if (this.settings.position.includes('right')) return 'flex-end';
            return 'center';
        }

        success(message) {
            this.showNotification(message, 'success');
        }

        error(message) {
            this.showNotification(message, 'error');
        }

        showNotification(message, type) {
            const notification = document.createElement('div');
            notification.className = `operation-notification operation-notification-${type}`;

            // 设置通知样式
            Object.assign(notification.style, {
                backgroundColor: type === 'success' ? this.settings.successColor : this.settings.errorColor,
                color: this.settings.textColor,
                padding: this.settings.padding,
                borderRadius: this.settings.borderRadius,
                fontSize: this.settings.fontSize,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                opacity: '0',
                transform: 'translateY(-20px)',
                transition: `all ${this.settings.animationDuration}ms ease-out`,
                maxWidth: '300px',
                wordBreak: 'break-word'
            });

            notification.textContent = message;
            this.container.appendChild(notification);

            // 触发动画
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateY(0)';
            }, 10);

            // 自动移除
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    this.container.removeChild(notification);
                }, this.settings.animationDuration);
            }, this.settings.duration);
        }
        destroy() {
            if (this.container && this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        }
    }

    // const notifier = new OperationNotifier();
    // notifier.success('操作成功！');
    // notifier.error('操作失败，请重试！');

    window.myToast = new OperationNotifier();
})();

