const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu'),
    getGroupMenus: () => ipcRenderer.invoke('get:groupMenus'),
    openUrl: (url, name) => ipcRenderer.send('open:url', url, name),
    autoClick: (callback) => ipcRenderer.on('auto:click',  (event, data) => {
        ipcRenderer.send('open:url', data.url, data.name);
        callback(data);
    }),
});

window.addEventListener('DOMContentLoaded', () => {})