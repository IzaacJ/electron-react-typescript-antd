import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import windowStateKeeper from 'electron-window-state';

let mainWindow: Electron.BrowserWindow | null;
let mainWindowState: any;

function createWindow() {
    mainWindowState = windowStateKeeper({
        defaultWidth: 1024,
        defaultHeight: 720
    });
    
    const windowOptions = {
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    };

    mainWindow = new BrowserWindow(windowOptions);

    mainWindowState.manage(mainWindow);

    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:4000');
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../index.html'),
                protocol: 'file:',
                slashes: true,
            })
        );
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;
