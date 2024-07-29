import { app, BrowserWindow } from 'electron';
import path from 'path'
import { Menu } from 'electron'
import Installer from 'nz_installer'
import { ipcMain } from 'electron';
import { fileURLToPath } from 'url';

Menu.setApplicationMenu(null)

// Получаем путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
   
    let mainWindow = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          nodeIntegration: false,
          enableRemoteModule: false,
          contextIsolation: true,
          sandbox: true
        }
      })

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});


ipcMain.on('startInstall', async (event, arg) => {
  console.log('begin installing...');
  console.log(arg);
  const url = 'https://dropbox.com/scl/fi/9vh2kv07okqe4mj205mhh/RELEASE.zip?rlkey=flpjb7sgat8s91gd0ewhtz1ya&st=lkcre4p7&dl=1';

  const MyInstaller = new Installer();

  MyInstaller.runInstallToDirectory(url, 'RELEASE.zip', arg);
})
