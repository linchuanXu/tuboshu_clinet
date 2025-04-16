const { contextBridge, ipcRenderer, webFrame}  = require('electron');

const paramEntry = process.argv.find(item => item.startsWith('--params='));
const context = JSON.parse(paramEntry.substring(paramEntry.indexOf('=') + 1));
const fingerPrint = context.fingerprint;

//const context = {source: params.source, name: params.name, unique: params.unique}
// Object.defineProperties(navigator, {
//     //appVersion:{get:()=> fingerPrint.navigator.appVersion},
//     userAgent: {get:()=> fingerPrint.navigator.userAgent},
//     userAgentData:{get:()=> fingerPrint.navigator.userAgentData},
//     languages: {get:()=> fingerPrint.navigator.languages},
//     webdriver: {get:()=> fingerPrint.navigator.webdriver},
//     platform: {get:()=> fingerPrint.navigator.platform}
// })

(async ()=>{
    await webFrame.executeJavaScript(`
        Object.defineProperties(screen, {
            width: { value: ${fingerPrint.screen.width} },
            height: { value: ${fingerPrint.screen.height} }
        });
        Object.defineProperty(navigator, 'appVersion', {
            value: "${fingerPrint.navigator.appVersion}"
        });
        Object.defineProperty(navigator, 'userAgent', {
            value: "${fingerPrint.navigator.userAgent}"
        });
        Object.defineProperty(navigator, 'userAgentData', {
            value: ${JSON.stringify(fingerPrint.navigator.userAgentData)}
        });
    `)
})()

window.addEventListener('DOMContentLoaded', async () => {
    await webFrame.executeJavaScript(`
// const topDiv = document.createElement('div');
// topDiv.id = 'top-layer-div';
// topDiv.textContent = '这是动态生成的顶层 DIV';
// Object.assign(topDiv.style, {
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   width: '100%',
//   zIndex: '9999',
//   backgroundColor: 'white',
//   padding: '20px',
// });
// document.body.appendChild(topDiv);
// new FloatingNav({
//     background: '#ccc',
//     buttonBackground: '#e3f2fd',
//     buttonHover: '#bbdefb',
// });
    `);
})

contextBridge.exposeInMainWorld('myApi', {
    refreshSelf:() => ipcRenderer.invoke('refresh:self')
})

ipcRenderer.on('open:window', (event, url) => {
    window.location.href = url;
});

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const selectionText = window.getSelection().toString().trim();
    const data = {x: e.clientX, y: e.clientY};
    if (selectionText) {
        ipcRenderer.send('copy:text', selectionText)
        ipcRenderer.send("popup:contextMenu", Object.assign(data, {copy:true}))
    }else{
        const isInputElement = ['INPUT', 'TEXTAREA'].includes(e.target.tagName);
        const isContentEditable = e.target.isContentEditable;

        if(isInputElement || isContentEditable){
            ipcRenderer.send("popup:contextMenu", Object.assign(data, {copy:true, paste:true}))
        }else{
            //ipcRenderer.send('copy:text', window.location.href)
            ipcRenderer.send("popup:contextMenu", Object.assign(data, {copy:false}))
        }
    }
});

window.addEventListener('keydown', (event) => {
    const isInputElement = ['INPUT', 'TEXTAREA'].includes(event.target.tagName);
    const isContentEditable = event.target.isContentEditable;

    if (isInputElement || isContentEditable) {
        return;
    }

    if(event.key === "ArrowLeft"){
        ipcRenderer.send('history:goBack')
    }else if (event.key === "ArrowRight"){
        ipcRenderer.send('history:goForward')
    }
});

document.addEventListener('wheel', async (event) => {
    if (event.ctrlKey|| event.metaKey) {
        const isZoomOpen = await ipcRenderer.invoke("handle:zoom");
        if(isZoomOpen){
            event.preventDefault();
            const delta = event.deltaY;
            ipcRenderer.send('zoom:wheel', delta);
        }
    }
}, { passive: false });

document.addEventListener('fullscreenchange', async () => {
    if (document.fullscreenElement) {
        await ipcRenderer.invoke('handle:menu', true)
    } else {
        await ipcRenderer.invoke('handle:menu', false)
    }
});