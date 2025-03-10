import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 800,
    // TODO
    /* webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }, */
  });

  if (app.isPackaged) {
    win.loadFile(
      path.join(
        __dirname, '..', 'out', 'index.html',
      ),
    );
  } else {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') return;
  app.quit();
});
