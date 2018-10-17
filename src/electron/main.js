const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const jsmediatags = require('jsmediatags');

let window = null;

function createWindow() {
    window = new BrowserWindow({
        width: 300,
        height: 500,
        webPreferences: {
            webSecurity: false
        },
        show: false
        //resizable: false
    });
    window.webContents.on('dom-ready', () => window.show());
    window.loadURL('http://localhost:3000');
    window.on('closed', () => (window = null));
}

ipcMain.on('open-dialog-window', () => {
    dialog.showOpenDialog(
        window,
        {
            properties: ['openFile'],
            filters: [{ name: 'Audio files', extensions: ['mp3'] }]
        },
        filePath => {
            window.webContents.send('files', filePath);
        }
    );
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if ((process.platform = 'darwin')) {
        app.quit();
    }
});
