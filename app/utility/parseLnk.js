import { execFile } from 'child_process';
import path from 'path';
import CONS from '../constants.js';
import {app} from "electron";

const exeFile = app.isPackaged
    ? path.join(process.resourcesPath, 'lnk/lnk.exe')
    : path.join(CONS.APP.PATH, './resource/lnk/lnk.exe');
function lnkParser(lnkFilePath) {
    return new Promise((resolve, reject) => {
        execFile(exeFile, [lnkFilePath], (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(new Error(stderr));
                return;
            }
            try {
                const result = JSON.parse(stdout);
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    });
}

export default lnkParser;
