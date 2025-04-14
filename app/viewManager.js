import {WebContentsView, session, shell} from 'electron'
import eventManager from './eventManager.js'
import lokiManager from './store/lokiManager.js'
import fingerPrint from "./disguise/fingerPrint.js";
import storeManager from "./store/storeManager.js";
import CONS from './constants.js'
import Utility from "./utility/utility.js";

class ViewManager {
    constructor() {
        this.views = [];
    }
    addView(view) {
        this.views.push(view);
    }

    isExist(name) {
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].name === name.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    closeView(name) {
        const index = this.views.findIndex(view =>
            view.name === name.toLowerCase()
        );
        if (index === -1) return false;

        const closedView = this.views.splice(index, 1)[0];
        if (closedView.object.webContents && !closedView.object.webContents.isDestroyed()) {
            closedView.object.webContents.close();
            closedView.object = null;
        }

        return true;
    }

    refreshActiveView(){
        const activeView = this.getActiveView();
        //if(!activeView.url.toLowerCase().startsWith("http")) return;
        Utility.loadWithLoading(activeView.object, activeView.url).then(()=>{
            eventManager.emit('set:title', activeView.object.webContents.getTitle());
        }).catch((error)=>{
            console.log('error', error);
            setTimeout(()=> this.refreshActiveView(), 1000)
        })
    }

    getActiveView() {
        return this.views.find(view => view.object.getVisible());
    }

    activeView(name) {
        const timestamp = Math.floor(Date.now() / 1000);
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].name === name.toLowerCase()) {
                this.views[i].time = timestamp;
                this.views[i].object.setVisible(true)
                this.views[i].object.webContents.focus();
                eventManager.emit('set:title', this.views[i].object.webContents.getTitle());
            }else{
                this.views[i].object.setVisible(false)
            }
        }
    }

    createNewView(url, name) {
        if (this.isExist(name)) {
            const activeView = this.getActiveView();
            this.activeView(name);

            if(activeView?.name === name){
                this.refreshActiveView();
                return null;
            }

            if(CONS.APP.CLOSE_SITE_NAME === name){
                this.refreshActiveView();
                return null;
            }
            return null;
        }

        const {fingerprint, headers} = fingerPrint.getFinger();
        const partitionName = 'persist:' + name;
        const mySession = session.fromPartition(partitionName);

        const isRemoteAddr = url.toLowerCase().startsWith("http");
        let preloadjs = isRemoteAddr ? "web.js" : "setting.js";
        if(url.includes("http://localhost:")) preloadjs = "setting.js"

        const view = new WebContentsView({
            webPreferences: {
                sandbox: true,
                webSecurity: true,
                nodeIntegration: false,
                contextIsolation: true,
                dnsPrefetch: false,
                partition: partitionName,
                additionalArguments: ['--name', JSON.stringify(fingerprint)],
                preload: CONS.APP.PATH + '/app/preload/'+ preloadjs
        }})

        this.renderProcessGone(view);
        view.webContents.setZoomLevel(0)

        if(storeManager.getSetting('isOpenDevTools')){
            view.webContents.openDevTools({mode: 'right',activate: true})
        }

        Utility.alterRequestHeader(view, headers)
        Utility.alterResponseHeader(view)

        this.injectJsCode(view, name);
        this.setProxy(mySession, name).then(()=>{
            Utility.loadWithLoading(view, url).then(()=>{
                eventManager.emit('set:title', view.webContents.getTitle());
            })
        });

        view.webContents.setWindowOpenHandler((details) => {
            if(Utility.isMainDomainEqual(details.url, url)){
                view.webContents.send('open:window', details.url)
                return { action: 'deny' };
            }

            if(storeManager.getSetting('howLinkOpenMethod') === "tuboshu"){
                return {action: 'allow', overrideBrowserWindowOptions: {autoHideMenuBar: true}};
            }

            shell.openExternal(details.url).finally();
            return { action: 'deny' };
        })

        this.views.forEach(view => {view.object.setVisible(false)})

        this.addView({
            name: name.toLowerCase(),
            url: url.toLowerCase(),
            time: Math.floor(Date.now() / 1000),
            object: view
        })
        return view
    }

    injectJsCode(view, name){
        view.webContents.on('did-finish-load',async ()=>{
            const manager = await lokiManager;
            const site = manager.getSite(name);
            if(site && Object.hasOwn(site,'jsCode') && site.jsCode.length > 0){
                const code = Utility.appendJsCode(JSON.stringify(site.jsCode))
                await view.webContents.executeJavaScript(code);
            }
        })
    }

    async setProxy(mySession, name) {
        const manager = await lokiManager;
        const site = manager.getSite(name);
        if(site && Object.hasOwn(site,'proxy') && site.proxy.length > 10){
            mySession.setProxy({
                proxyRules: site.proxy,
            });
        }
    }

    renderProcessGone(view){
        view.webContents.on('render-process-gone', (event, details) => {
            console.error('The rendering process has crashed:', details.reason);
            if (!view.webContents.isDestroyed()) view.webContents.reload();
        });
    }
}

export default new ViewManager();