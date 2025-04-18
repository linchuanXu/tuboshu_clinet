import {app, BaseWindow, View, screen, ipcMain, clipboard, WebContentsView, nativeTheme, Menu} from 'electron'
import viewManager from './viewManager.js'
import lokiManager from './store/lokiManager.js'
import storeManager from './store/storeManager.js'
import eventManager from './eventManager.js'
import fetchIcon from './utility/fetchIcon.js'
import CONS from './constants.js'
import dataExport from './utility/dataExport.js'
import Layout from "./utility/layout.js"
import Utility from "./utility/utility.js";

class WindowManager{

    isAdjusting = false;
    resizeTimer = null;
    cleanupTimer = null;
    constructor() {
        this.window = null
        this.menuView = null
        this.webView = null
    }

    getMenuView(){
        return this.menuView;
    }

    getWindow(){
        return this.window;
    }

    createWindow() {
        const winSize = Layout.getWinSize();
        const win = new BaseWindow({
            width: winSize.width,
            height: winSize.height,
            autoHideMenuBar: true,
            show:false,
            icon: CONS.APP.PATH+'/icon.ico',
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                backgroundThrottling: false
            }
        })

        const menuView = new WebContentsView({
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                devTools: true,
                preload: CONS.APP.PATH +'/app/preload/navigate.js'
            }
        });


        const layout = Layout.getLayout(win)
        menuView.setBounds(layout.menu)
        menuView.webContents.loadFile('gui/index.html').then(()=>{
            this.afterCloseSitePage();
        })

        const webView = new View();
        //webView.setBackgroundColor("#aaa")
        webView.setBounds(layout.web)

        win.contentView.addChildView(menuView);
        win.contentView.addChildView(webView);
        win.show();

        this.window = win;
        this.menuView = menuView;
        this.webView = webView;

        this.bindIpcMain();
        this.bindEvents();
        this.setSystemTheme();
        this.uselessSiteCleaner();
    }

    bindIpcMain(){
        dataExport.bindExportIpc();
        dataExport.bindImportIpc();

        ipcMain.handle('handle:menu', async (event, hide) => {
            if(hide === true){
                storeManager.set('isMenuVisible', 0);
                this.handleResize();
            }else{
                storeManager.set('isMenuVisible', 1);
                this.handleResize();
            }
        })

        ipcMain.handle('handle:zoom', async (event) => {
            return storeManager.getSetting('isOpenZoom');
        });

        ipcMain.handle('refresh:self', async (event, ...args) => {
            viewManager.refreshActiveView();
        });

        ipcMain.handle('get:menu', async (event, ...args) => {
            const manager = await lokiManager;
            return manager.getMenus()
        });

        ipcMain.handle('get:groupMenus', async (e) => {
            const manager = await lokiManager;
            return manager.getGroupMenus()
        });


        ipcMain.handle('get:shortcuts', async (event, ...args) => {
            const manager = await lokiManager;
            return manager.getShortcuts()
        });

        ipcMain.handle('get:settings', (event, ...args) => {
             return storeManager.getSettings()
        });

        ipcMain.handle('update:shortcut', async (event, shortcut) => {
            const manager = await lokiManager;
            const oldShortcut = manager.getShortcut(shortcut.name);

            const data = {shortcut, oldShortcut}
            const result = await eventManager.send('replace:shortcut', data)

            if(result === true){
                manager.updateShortcut(shortcut);
                return {code:0, data:shortcut, msg:"操作成功！"}
            }else{
                return {code:1, data:oldShortcut, msg:"操作失败！"};
            }
        });

        ipcMain.handle('get:version', async () => {
           const data = await Utility.fetchVersionLatest()
           return {
               version: app.getVersion(),
               newVersion: data.version,
               github: data.github,
               download: data.download,
               electron: process.versions.electron,
               chrome: process.versions.chrome
           }
        })

        eventManager.on('set:title', (data) => {
            this.window.setTitle(data);
        });

        eventManager.on('layout:resize', (data) => {
            const layout = Layout.getLayout(this.window)
            data.view.object.setBounds(layout.view)
            this.webView.addChildView(data.view.object)
        })

        ipcMain.on('open:url', (event, site) => {
            viewManager.createNewView(site.url, site.name)
            console.log('total children:', this.webView.children.length);
            console.log('total Views', viewManager.views.length);
        })

        ipcMain.on('open:site', (event, site) => {
            this.menuView.webContents.send('auto:click', site);
        });

        ipcMain.on('copy:text', (event, text) => {
            clipboard.writeText(text);
        });

        ipcMain.on('zoom:wheel', (event, delta) => {
            const view = viewManager.getActiveView();
            let zoomLevel = view.object.webContents.getZoomLevel();
            if (delta > 0) {
                zoomLevel -= 0.5;
            } else if (delta < 0) {
                zoomLevel += 0.5;
            }
            zoomLevel = Math.min(3, Math.max(-2, zoomLevel));
            view.object.webContents.setZoomLevel(zoomLevel);
        });

        //更新左边导航栏
        ipcMain.on('update:menu', async (event, menu) => {
            const manager = await lokiManager;
            manager.updateSite(menu);
            this.closeHideSites();
            this.menuView.webContents.reload();
        });

        //批量更新排序
        ipcMain.handle('batch:menus', async (event, menus) => {
            const manager = await lokiManager;
            manager.batchUpdateSite(menus);
            this.closeHideSites();
            this.menuView.webContents.reload();
        });

        //新增左边导航栏
        ipcMain.on('add:menu', async (event, menu) => {
            const manager = await lokiManager;
            manager.addSite(menu);
            this.closeHideSites();
            this.menuView.webContents.reload();
        });

        //删除左边导航栏
        ipcMain.on('remove:menu', async (event, menu) => {
            const manager = await lokiManager;
            manager.removeSite(menu);
            this.menuView.webContents.reload();
            this.closeHideSites();
        });

        ipcMain.handle('get:groups', async () => {
            const manager = await lokiManager;
            return manager.getGroups()
        })

        ipcMain.handle('update:group', async (event, group) => {
            const manager = await lokiManager;
            manager.updateGroup(group)
            this.menuView.webContents.reload();
            return true;
        })

        ipcMain.handle('remove:group', async (event, group) => {
            const manager = await lokiManager;
            manager.removeGroup(group)
            this.menuView.webContents.reload();
            return true;
        })

        ipcMain.on('update:setting', (event, setting) => {
            storeManager.updateSetting(setting)
            if(setting.name === "systemTheme"){
                this.setSystemTheme();
            }
            if(setting.name === "isMenuVisible"){
                this.handleResize()
            }
            if(setting.name === "leftMenuPosition"){
                this.handleResize()
            }
            if (setting.name === "isMemoryOptimizationEnabled"){
                this.uselessSiteCleaner();
            }
            if (setting.name === "isOpenDevTools"){
                this.closeHideSites();
            }
        });

        ipcMain.handle('get:favicon', async (event, name) => {
            try {
                const manager = await lokiManager;
                const site = manager.getSite(name);

                let iconData= storeManager.get(site.url)
                if (!iconData) {
                    const faviconUrl = await fetchIcon.getFaviconUrl(site.url);
                    iconData = await fetchIcon.fetchFaviconAsBase64(faviconUrl);
                }

                manager.updateSite(Object.assign(site, {img: iconData}))
                storeManager.set(site.url, iconData);

                this.menuView.webContents.reload();
                return {ret:0, data:iconData};
            } catch (error) {
                return {ret:1, data:'获取失败:'+ error};
            }
        });
    }

    bindEvents(){
        this.window.on('resize', () => {
            if (this.resizeTimer) clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 200);
        })

        this.window.on('move', () => {
            const res = storeManager.getSetting('isWindowEdgeAdsorption');
            if(!res) return;
            this.handleMove();
        });

        this.window.on('focus', () => {
            this.handleResize();
        });

        this.window.on('close', (e) => {
            if(app.isQuitting === false){
                e.preventDefault();
                this.window.hide();
                app.dock?.hide();
            }
        })

        //窗口已经销毁，清理资源
        this.window.on('closed', (e) => {
            this.window.removeAllListeners('resize');
            this.window.removeAllListeners('show');
            this.window.removeAllListeners('focus');
            this.window.removeAllListeners('move');
            this.destroy();
        })
    }

    handleResize() {
        const layout = Layout.getLayout(this.window)
        this.menuView.setBounds(layout.menu);
        this.webView.setBounds(layout.web);

        viewManager.views.forEach(view => {
            view.object.setBounds(layout.view);
        });
    }

    handleMove(){
        if (this.isAdjusting) return;
        const windowBounds = this.getWindow().getBounds();
        const centerPoint = {
            x: windowBounds.x + windowBounds.width / 2,
            y: windowBounds.y + windowBounds.height / 2
        };

        const display = screen.getDisplayNearestPoint(centerPoint);
        const workArea = display.workArea;
        const scaleFactor = display.scaleFactor;
        const threshold = 30 * scaleFactor;

        // 计算窗口到左右边缘的距离
        const leftEdgeDistance = windowBounds.x - workArea.x;
        const rightEdgeDistance = (workArea.x + workArea.width) - (windowBounds.x + windowBounds.width);
        let newBounds = { ...windowBounds};

        if (Math.abs(leftEdgeDistance) <= threshold) {
            Object.assign(newBounds, {
                x: workArea.x,
                y: workArea.y,
                height: workArea.height
            });
        }
        else if (Math.abs(rightEdgeDistance) <= threshold) {
            Object.assign(newBounds, {
                x: workArea.x + workArea.width - windowBounds.width,
                y: workArea.y,
                height: workArea.height
            });
        }
        if (JSON.stringify(newBounds) !== JSON.stringify(windowBounds)) {
            this.isAdjusting = true;
            this.getWindow().setBounds(newBounds, true);
            this.isAdjusting = false;
        }
    }

    setSystemTheme(){
        nativeTheme.themeSource = storeManager.getSetting('systemTheme');
        if(nativeTheme.shouldUseDarkColors ){
            this.window.setBackgroundColor('#18181C');
        }else{
            this.window.setBackgroundColor('#ffffff');
        }

    }
    gotoSetting(){
        lokiManager.then((manager) => {
            const menu = manager.getGroupMenus();
            if(menu.openMenus.length > 0){
                this.menuView.webContents.send('auto:click', menu.openMenus[0]);
            }else{
                this.menuView.webContents.send('auto:click', menu.setMenus[0]);
            }
        })
    }

    afterCloseSitePage() {
        const site = {url:CONS.APP.CLOSE_SITE_URL,  name:CONS.APP.CLOSE_SITE_NAME};
        this.menuView.webContents.send('auto:click', site);
    }


    uselessSiteCleaner(){
        const res = storeManager.getSetting('isMemoryOptimizationEnabled');
        if(!res) return;

        const currentView = viewManager.getActiveView();
        lokiManager.then((manager) => {
            const urls = manager.getGroupMenus().openMenus.map(item => item.url);
            viewManager.views = viewManager.views.filter(view => {
                if(currentView.name === view.name) return true;

                const notInMenu = !urls.includes(view.url);
                const overTime = Math.floor((Date.now() - view.time) / 1000) > 600;

                if (notInMenu || overTime) {
                    viewManager.clearView(view)
                    return false;
                }
                return true;
            })
        })

        clearTimeout(this.cleanupTimer);
        this.cleanupTimer = setTimeout(() => this.uselessSiteCleaner(), 5*60*1000);
    }

    closeHideSites(){
        const currentView = viewManager.getActiveView();
        lokiManager.then((manager) => {
            const urls = manager.getGroupMenus().openMenus.map(item => item.url);
            viewManager.views = viewManager.views.filter(view => {
                if(currentView.name === view.name) return true;
                if(!urls.includes(view.url)){
                    viewManager.clearView(view)
                    return false;
                }
                return true;
            })
        })
    }

    destroy() {
       if(this.cleanupTimer) clearTimeout(this.cleanupTimer);
       if(this.resizeTimer) clearTimeout(this.resizeTimer);
       if(this.window) this.window = null;
    }
}

export default new WindowManager();