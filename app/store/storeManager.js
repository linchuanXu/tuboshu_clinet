// import {app} from "electron"
 // import Conf from 'conf'
import tbsDbManager from './tbsDbManager.js'
import CONS from './../constants.js'

class StoreManager{
    constructor() {
        this.store = tbsDbManager;
    }

    get(key) {
        return this.store.getSetting(key);
    }

    set(key, value) {
        this.store.addSetting(key, value);
    }

    getSettings(){
        return Object.keys(CONS.CONFIG).map(key => {
            return {name : key, value : this.getSetting(key)}
        })
    }

    getSetting(key){
        if(this.store.hasSetting(key)){
            return this.store.getSetting(key);
        }
        return CONS.CONFIG[key]
    }

    updateSetting(setting){
        return this.store.updateSetting(setting.name, setting.value);
    }
}

export default new StoreManager()