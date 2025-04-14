import {Menu, ipcMain} from 'electron'
import windowManager from './../windowManager.js'
import viewManager from "./../viewManager.js";
import storeManager from "../store/storeManager.js";

class ContextManager {
    constructor() {
        if (ContextManager.instance) return ContextManager.instance;
        ContextManager.instance = this;
        this.contextMenu = null;
    }

    createContextMenu() {
        ipcMain.on('popup:contextMenu', (e, pos) => {
            if(storeManager.getSetting('isOpenContextMenu')){
                this.popupContextMenu(pos.x, pos.y, pos.copy);
            }
        })

        ipcMain.on('history:goBack', () => {
            this.clearUselessHistoryRecord();
            this.goBack();
        })

        ipcMain.on('history:goForward', () => {
            this.clearUselessHistoryRecord();
            this.goForward();
        })

        ipcMain.on('history:goHome', () => {
            this.goHome();
        })
    }
    popupContextMenu(posX, posY, copy) {
        this.clearUselessHistoryRecord();
        const win = windowManager.getWindow();
        const view = viewManager.getActiveView();
        const history = view.object.webContents.navigationHistory;

        const template = [];

        if(copy === false){
            if(history.canGoBack()){
                template.push({ label: '后退', click: () => this.goBack()})
            }

            if(history.canGoForward()){
                template.push({ label: '前进', click: () => this.goForward()})
            }

            template.push({ label: '刷新', click: () => this.reload()})
            template.push({ label: '关闭', click: () => this.closeView()})
            template.push({ label: '全屏', role: 'togglefullscreen' })

            // if(history.length() > 1){
            //     template.push({ label: '主页', click: () => this.goHome()})
            // }
            //template.push({ type: 'separator' })
            //template.push({ label: '开发者工具', click: () => view.object.webContents.openDevTools() })
        }else{
            template.push({ label: '复制', role: 'copy' })
            template.push({ label: '剪贴', role: 'cut' })
            template.push({ label: '全选', role: 'selectAll' })
        }


        this.contextMenu = Menu.buildFromTemplate(template)
        this.contextMenu.popup({ window:win, x:posX, y:posY})
    }

    clearUselessHistoryRecord(){
        const view = viewManager.getActiveView();
        const history = view.object.webContents.navigationHistory;
        const entries = history.getAllEntries();
        if(entries.length <= 1) return;

        const activeIndex = history.getActiveIndex()
        const indices = entries.reduce((acc, item, index) => {
            if (item.url.toLowerCase().startsWith('file:')) acc.push(index);
            return acc;
        }, []);
        indices.filter((index) => {
            if(index !== activeIndex) history.removeEntryAtIndex(index);
        })
    }

    goBack(){
        const view = viewManager.getActiveView();
        const history = view.object.webContents.navigationHistory;
        if(history.canGoBack()) history.goBack();
    }

    goForward(){
        const view = viewManager.getActiveView();
        const history = view.object.webContents.navigationHistory;
        if(history.canGoForward()) history.goForward();
    }

    goHome(){
        viewManager.refreshActiveView();
    }

    reload(){
        const view = viewManager.getActiveView();
        view.object.webContents.reload()
    }

    closeView(){
        const view = viewManager.getActiveView();
        viewManager.closeView(view.name)
        windowManager.afterCloseSitePage();
    }


}
export default  new ContextManager();