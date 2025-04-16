import os from 'os'
import { FingerprintGenerator } from 'fingerprint-generator'

// 生成浏览器指纹

class FingerPrint {
    constructor() {
        this.fingerPrint = new FingerprintGenerator();

    }

    #getPlatform() {
        let platform = os.platform();
        if(platform.toLowerCase().startsWith('win')){
            platform = 'windows';
        }else if(platform.toLowerCase().startsWith('darwin')){
            platform = 'macos';
        }else{
            platform = 'linux';
        }
        return platform;
    }

    getFinger() {
        const { fingerprint, headers } = this.fingerPrint.getFingerprint({
            devices: ['desktop'],
            operatingSystems: [this.#getPlatform()],
            browsers: ['chrome'],
            locales: ['zh-CN']
        });

        return {
            fingerprint,
            headers
        };
    }
 }

// 导出给预加载脚本使用
export default new FingerPrint();