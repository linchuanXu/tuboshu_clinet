import path from 'path'
import { fileURLToPath } from 'url';
import {app} from "electron";

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);

const SETTING_URL = app.isPackaged
    ? `file://${path.join(__dirname, '..', 'gui/dist/index.html')}`
    : 'http://localhost:5173/';

export default Object.freeze({
    SIZE: {
        HEIGHT:768,
        WIDTH: 1024,
        MENU_WIDTH: 50
    },
    CONFIG: {
        defaultWindowSize : {
            width: 1024,
            height: 768,
        },
        defaultMenuWidth: 50,
        leftMenuPosition:'left',
        isWindowEdgeAdsorption: 1,
        isMemoryOptimizationEnabled:1,
        isMenuVisible:1,
        isOpenDevTools:0,
        isOpenZoom:1,
        systemTheme:'system'
    },

    PATH: {
        APP_PATH: path.join(__dirname, '..'),
    },
    PREVIEW_IMG: "/gui/static/images/logo/preview_default.png",
    SETTING:[
        {
            tag: "设置",
            name: "setting",
            url: SETTING_URL,
            img: "/gui/static/images/logo/setting.png",
        },
    ],
    SITES:[
        {
            tag: "主页",
            name: "home",
            url: "https://app.mindnotes.cn/",
            img: "/gui/static/images/logo/home.svg",
            isOpen:true,
            order:1,
        },
        {
            tag: "抖卡",
            name: "tikcards",
            url: "https://app.mindnotes.cn/tikcards",
            img: "/gui/static/images/logo/tikcards.png",
            isOpen:true,
            order: 2,
        },
        {
            tag: "聊卡",
            name: "chats",
            url: "https://app.mindnotes.cn/chats",
            img: "/gui/static/images/logo/chats.png",
            isOpen:true,
            order: 3,
        },
        {
            tag: "笔记本",
            name: "allnotes",
            url: "https://app.mindnotes.cn/allnotes",
            img: "/gui/static/images/logo/allnotes.jpg",
            isOpen:true,
            order: 4,
        },
        {
            tag: "探索",
            name: "tools",
            url: "https://app.mindnotes.cn/tools",
            img: "/gui/static/images/logo/tools.png",
            isOpen:true,
            order: 5,
        }
    ],
    SHORTCUT:[
        {
            tag:  "退出软件",
            name: "softwareExit",
            cmd: "CommandOrControl+Q",
            isGlobal:true,
            isOpen:true,
        },
        {
            tag: "隐藏/显示 软件窗口",
            name: "softwareWindowVisibilityController",
            cmd: "CommandOrControl+H",
            isGlobal:true,
            isOpen:true,
        },
        {
            tag: "隐藏/显示 侧边导航",
            name: "isMenuVisible",
            cmd: "CommandOrControl+B",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "打开设置",
            name: "softwareSetting",
            cmd: "CommandOrControl+S",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "切换站点",
            name: "softwareSiteSwitch",
            cmd: "CommandOrControl+Tab",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "切换分组",
            name: "groupSiteSwitch",
            cmd: "CommandOrControl+`",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "取消/设置 窗口置顶",
            name: "windowTopmostToggle",
            cmd: "CommandOrControl+T",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "恢复默认窗口",
            name: "restoreDefaultWindow",
            cmd: "CommandOrControl+O",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "刷新当前页面",
            name: "currentPageRefresher",
            cmd: "CommandOrControl+R",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "最小化窗口",
            name: "windowMinimize",
            cmd: "CommandOrControl+[",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "最大化窗口",
            name: "windowMaximizer",
            cmd: "CommandOrControl+]",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "屏幕左边小窗",
            name: "leftScreenMiniWindow",
            cmd: "CommandOrControl+Left",
            isGlobal:false,
            isOpen:true,
        },
        {
            tag: "屏幕右边小窗",
            name: "rightScreenMiniWindow",
            cmd: "CommandOrControl+Right",
            isGlobal:false,
            isOpen:true,
        }
    ]
});