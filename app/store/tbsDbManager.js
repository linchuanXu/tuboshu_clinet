import {app, nativeImage} from 'electron'
import crypto from 'crypto'
import path from 'path'
import TbsDB from  './TuboshuDb.js'
import CONS from '../constants.js'

const dbPath = path.join(app.getPath('userData'), 'userdata.db');
const md5Hash = (data) => crypto.createHash('md5').update(data).digest('hex');
const processImg = (menuArray) => menuArray.map(element => {
    if(element.img.startsWith("data:")) return element;
    if(element.img.includes("preview_default")) element.img = CONS.APP.PREVIEW_IMG;

    const imagePath = path.join(CONS.APP.PATH, element.img);
    const Img = nativeImage.createFromPath(imagePath);
    return { ...element, img: Img.toDataURL()};
});

class TbsDbManager {

    constructor() {
        this.db = TbsDB.getInstance(dbPath, {autoload:true})
        this.initializeCollections()
    }
    initializeCollections(){
        if (!this.db.getCollection('sites')) {
            const sitesCollection = this.db.addCollection('sites', {unique: ['name'] });
            if (sitesCollection.count() === 0) {
                sitesCollection.insert(CONS.SITES);
                this.db.saveDatabase();
            }
        }

        if (!this.db.getCollection('shortcuts')) {
            const sitesCollection = this.db.addCollection('shortcuts', { unique: ['name'] });
            if (sitesCollection.count() === 0) {
                sitesCollection.insert(CONS.SHORTCUT);
            }
        }

        if (!this.db.getCollection('groups')) {
            this.db.addCollection('groups', {unique: ['name'] });
        }

        if (!this.db.getCollection('lnks')) {
            this.db.addCollection('lnks', {unique: ['name'] });
        }

        if (!this.db.getCollection('setting')) {
            this.db.addCollection('setting', { unique: ['name'] });
        }
    }

    // 方法无需再等待，因为初始化已完成
    getSites() {
        const sitesCollection = this.db.getCollection('sites');
        return sitesCollection.chain().find({}).simplesort('order', { desc: false }).data();
    }

    clearSites() {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.clear();
    }

    getSite(name) {
        const sitesCollection = this.db.getCollection('sites');
        return sitesCollection.findOne({name: name});
    }

    addSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        site.order = sitesCollection.count() + 1;
        site.name = md5Hash(site.name+String(Date.now()));
        sitesCollection.insert(site);
        return site;
    }

    updateSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.findAndUpdate({name: site.name}, (doc)=>{Object.assign(doc, site)});
    }

    batchUpdateSite(sites) {
        if(sites.length === 0) return;
        sites.forEach(site => {
            this.updateSite(site)
        });
    }

    removeSite(site) {
        const sitesCollection = this.db.getCollection('sites');
        sitesCollection.findAndRemove({name: site.name});
    }

    getMenus() {
        let sites = this.getSites();
        if(sites.length === 0) sites = CONS.SITES;
        return {
            openMenus : processImg(sites.filter(site => site.isOpen)),
            closeMenus: processImg(sites.filter(site => !site.isOpen)),
            setMenus : processImg(CONS.SETTING)
        }
    }

    getGroupMenus(){
        const menus = this.getMenus();
        const group = this.getOpenGroup();
        if(group) {
            const webs = group.sites.split(',').filter(Boolean);
            const listMap = new Map();
            menus.openMenus.forEach(item => {listMap.set(item.name, item);});
            menus.openMenus = webs.map(name => listMap.get(name)).filter(Boolean);
        }
        return menus;
    }

    getShortcuts() {
        const shortcutCollection = this.db.getCollection('shortcuts');
        return shortcutCollection.chain().find({}).simplesort('isOpen', { desc: true }).data();
    }

    getShortcut(name) {
        const shortcutCollection = this.db.getCollection('shortcuts');
        return shortcutCollection.findOne({name: name});
    }

    updateShortcut(shortcut) {
        const shortcutCollection = this.db.getCollection('shortcuts');
        shortcutCollection.findAndUpdate({name: shortcut.name}, (doc)=>{Object.assign(doc, shortcut)});
        return true;
    }

    addShortcut(shortcut) {
        const shortcutCollection = this.db.getCollection('shortcuts');
        shortcutCollection.insert(shortcut);
        return true;
    }

    getGroups() {
        const groupsCollection = this.db.getCollection('groups');
        return groupsCollection.chain().find({}).data();
    }
    updateGroup(group) {
        const groupsCollection = this.db.getCollection('groups');
        if(!group.name || !groupsCollection.findOne({name: group.name})){
            group.name = md5Hash(String(Date.now()));
            groupsCollection.insert(group);
            return true;
        }

        if(group.isOpen === true){
            const results = groupsCollection.find({ isOpen: true });
            results.forEach(doc => {
                doc.isOpen = false;
                groupsCollection.update(doc)
            })
        }
        groupsCollection.findAndUpdate({name: group.name}, (doc)=>{Object.assign(doc, group)});
        return true
    }

    getOpenGroup() {
        const groupsCollection = this.db.getCollection('groups');
        return groupsCollection.findOne({isOpen: true});
    }

    resetGroup() {
        const groupsCollection = this.db.getCollection('groups');
        const results = groupsCollection.find({ isOpen: true });
        results.forEach(doc => {
            doc.isOpen = false;
            groupsCollection.update(doc)
        })
    }

    removeGroup(group) {
        const groupsCollection = this.db.getCollection('groups');
        groupsCollection.findAndRemove({name: group.name});
    }

    addLnk(lnk) {
        const lnkCollection = this.db.getCollection('lnks');
        lnk.order = lnkCollection.count() + 1;
        lnkCollection.insert(lnk);
    }

    removeLnk(lnk) {
        const lnkCollection = this.db.getCollection('lnks');
        lnkCollection.findAndRemove({name: lnk.name});
    }

    getLnks() {
        const lnkCollection = this.db.getCollection('lnks');
        return lnkCollection.chain().find({}).simplesort('order', { desc: false }).data();
    }

    getLnkCount(){
        const lnkCollection = this.db.getCollection('lnks');
        return lnkCollection.count()
    }

    addSetting(key, val){
        const settingCollection = this.db.getCollection('setting');
        settingCollection.insert({name:key, value:val});
    }

    getSetting(key){
        const settingCollection = this.db.getCollection('setting');
        const setting = settingCollection.findOne({name:key});
        return setting?.value
    }

    hasSetting(key){
        const settingCollection = this.db.getCollection('setting');
        return settingCollection.findOne({name:key}) !== undefined
    }

    updateSetting(key, val){
        const settingCollection = this.db.getCollection('setting');
        if(settingCollection.findOne({name:key}) !== undefined){
            settingCollection.findAndUpdate({name: key}, doc => { doc.value = val })
        }else{
            settingCollection.insert({name:key, value:val});
        }
    }

    getAllConfigData(){
        return this.db.getAllData()
    }

    restoreAllConfigData(newData){
        this.db.replaceAllData(newData)
    }

}

export default new TbsDbManager();