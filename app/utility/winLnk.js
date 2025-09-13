import {nativeImage, ipcMain, shell} from "electron";
import { promises as fs } from 'fs'
import lnkParser from "./parseLnk.js";
import path from 'path'
import tbsDbManager from "../store/tbsDbManager.js";
import CONS from "../constants.js"


const FileType = Object.freeze({
    EXE: 'exe',
    DIRECTORY: 'directory',
    UNKNOWN: 'unknown'
});

class winLnk {
    constructor() {}

    convertFilePath(filePath){
        return path.normalize(filePath)
    }

    async checkPathType(filePath) {
        try {
            const executableExts = ['.lnk', '.exe'];
            const stats = await fs.stat(filePath);
            const ext = path.extname(filePath).toLowerCase();

            if(stats.isDirectory()) return FileType.DIRECTORY;
            if(!stats.isFile()) return FileType.UNKNOWN;
            if (executableExts.includes(ext)) return FileType.EXE;
        } catch (error) {
            throw new Error('路径不存在');
        }
    }

    #getDataUrlFromBitIcon(bitData) {
        const iconData = nativeImage.createFromBuffer(Buffer.from(bitData, 'hex'),{width: 32, height: 32});
        return iconData.toDataURL();
    }

    getDirectoryData(dirPath) {
        const normalizedPath = path.normalize(dirPath).replace(/\/$/, '');
        const dirName = path.basename(normalizedPath);
        const iconData = nativeImage.createFromPath(path.join(CONS.APP.PATH, 'resource/build', 'folder.png'));
        return {
            name: dirName,
            type: FileType.DIRECTORY,
            icon: iconData.toDataURL(),
            exePath: normalizedPath,
            args: '',
        };
    }

    async getExeData(data){
        const fileType = await this.checkPathType(data.targetPath);
        if(fileType === FileType.DIRECTORY){
            return this.getDirectoryData(data.targetPath)
        }
        const fileName = path.basename(data.targetPath);
        return {
            name: fileName,
            type: FileType.EXE,
            icon: this.#getDataUrlFromBitIcon(data.iconData),
            exePath: data.targetPath,
            args: data.arguments
        }
    }


    async addNewLnk(filePath) {
        try {

            const pathData = this.convertFilePath(filePath);
            const fileType = await this.checkPathType(pathData);

            let lnk;
            switch (fileType) {
                case FileType.DIRECTORY:
                    lnk = this.getDirectoryData(pathData);
                    break;

                case FileType.EXE:
                    const result = await lnkParser(pathData);
                    if (result.code  !== 0) {
                        throw new Error(`LNK parser failed: ${result.errMsg}`);
                    }
                    lnk = await this.getExeData(result.data);
                    break;

                default:
                    throw new Error(`Unsupported file type: ${fileType}`);
            }

            tbsDbManager.addLnk(lnk);
            return lnk;

        } catch (error) {
            throw new Error(`Failed to add new LNK: ${error.message}`);
        }
    }

    readLnk(filePath) {
        return shell.readShortcutLink(filePath)
    }

    bindIpcMain() {
        //上传lnk
        ipcMain.handle('winLnk:add:lnk', async (event, filePath) => {
            
            if(manager.getLnkCount() >= 8){
                throw new Error('最多只能添加8个快捷方式');
            }
           return await this.addNewLnk(filePath)
        })

        //获取所有lnks数据
        ipcMain.handle('winLnk:get:lnks', async () => {
            
            return tbsDbManager.getLnks();
        })

        //检查文件类型
        ipcMain.handle('winLnk:get:ext', async (event, filePath) => {
            return await this.checkPathType(filePath)
        })

        ipcMain.handle('winLnk:open:file', async (event, filePath) => {
            return await shell.openPath(filePath)
        })

        ipcMain.handle('winLnk:remove:lnk', async (event, name) => {
            
            return tbsDbManager.removeLnk({name: name});
        })
    }
}

export default new winLnk();