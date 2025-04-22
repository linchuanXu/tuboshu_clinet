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
    dropzone.textContent  = '支持EXE|快捷方式|文件夹';

    overlay.appendChild(dropzone);
    document.body.appendChild(overlay);

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
        if (e.dataTransfer.files.length  > 0) {
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