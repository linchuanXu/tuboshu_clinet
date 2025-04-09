import { Tray, Menu, app, shell} from 'electron'
import CONS from './constants.js'
import windowManager from './windowManager.js'

function createTray() {
    const tray = new Tray(CONS.PATH.APP_PATH + '/icon.png');
    const contextMenu = Menu.buildFromTemplate([
        { label: '官网', type: 'normal', click:openWebsite},
        //{ label: '当前版本', type: 'normal' },
        //{ label: '检测更新', type: 'normal' },
        { label: '设置', type: 'normal', click:autoClickSettings},
        { label: '显示/隐藏', type: 'normal', click:toggleWindow },
        { label: '退出', type: 'normal', click:reallyQuitApp}
    ]);

    tray.setToolTip("土拨鼠");
    tray.setContextMenu(contextMenu);
    tray.on('click', toggleWindow);
}

function openWebsite(){
    shell.openExternal('https://github.com/deepshit2025/tuboshu').finally();
}

function autoClickSettings(){
    let win = windowManager.getWindow();
    if(!win.isVisible()) win.show();

    let menuView = windowManager.getMenuView();
    menuView.webContents.send('auto:click', CONS.SETTING[0]);
}

function reallyQuitApp() {
    app.isQuitting = true;
    app.quit();
}

function toggleWindow() {
    let win = windowManager.getWindow();
    win.isVisible() ? win.hide():win.show();
}

export default {
    createTray,
    toggleWindow,
    reallyQuitApp,
    autoClickSettings,
    openWebsite
};