const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    openSite: (site) => ipcRenderer.send('open:site', site),
    getGroupMenus: () => ipcRenderer.invoke('get:groupMenus'),
    getGroups: () => ipcRenderer.invoke('get:groups'),
});