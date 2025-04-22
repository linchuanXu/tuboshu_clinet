const { contextBridge, ipcRenderer, webUtils} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    openSite: (site) => ipcRenderer.send('open:site', site),
    getGroupMenus: () => ipcRenderer.invoke('get:groupMenus'),
    getGroups: () => ipcRenderer.invoke('get:groups'),
    getFilePath: (file) => webUtils.getPathForFile(file),

    addLnk: (filePath) => ipcRenderer.invoke('winLnk:add:lnk', filePath),
    getLnks: () => ipcRenderer.invoke('winLnk:get:lnks'),
    getExt: (filePath) => ipcRenderer.invoke('winLnk:get:ext', filePath),
    removeLnk: (name) => ipcRenderer.invoke('winLnk:remove:lnk', name),
    openFile: (filePath) => ipcRenderer.invoke('winLnk:open:file', filePath),
});