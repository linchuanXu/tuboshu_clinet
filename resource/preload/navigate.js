const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu'),
    getGroupMenus: () => ipcRenderer.invoke('get:groupMenus'),
    openUrl: (site) => ipcRenderer.send('open:url', site),
    resetTitle: (name) => ipcRenderer.send('reset:title', name),
    autoClick: (callback) => ipcRenderer.on('auto:click',  (event, data) => {
        ipcRenderer.send('open:url', data);
        callback(data);
    }),
});

window.addEventListener('DOMContentLoaded', () => {})