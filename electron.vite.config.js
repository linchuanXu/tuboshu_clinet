import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import path from 'path'

export default defineConfig({
    main: {
        build: {
            outDir: 'out',
            minify:true,
            rollupOptions: {
                input: {main: path.resolve(__dirname, 'app/main.js')}
            }
        },
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
        build: {
            outDir: 'out/preload',
            rollupOptions: {
                input: {
                    navigate: path.resolve(__dirname, 'resource/preload/navigate.js'),
                    setting: path.resolve(__dirname, 'resource/preload/setting.js'),
                    web: path.resolve(__dirname, 'resource/preload/web.js')
                }
            }
        },
        plugins: [externalizeDepsPlugin()],
    }
})