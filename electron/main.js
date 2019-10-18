const { app, ipcMain } = require('electron');

// const isMac = /darwin/.test(process.platform)
// const isDev = require('electron-is-dev')
const path = require('path')
const url = require('url');
const { channels } = require('../src/shared/constants');
const { menubar } = require('menubar');
const startUrl = process.env.ELECTRON_START_URL || url.format({
  pathname: path.join(__dirname, '../index.html'),
  protocol: 'file:',
  slashes: true,
});
const mb = menubar({
  height: 500,
  index: startUrl,
  preloadWindow: true,
  resizable: false,
  width: 650
});
let mainWindow;

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});

app.on('ready', () => {});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
  }
});

ipcMain.on(channels.APP_INFO, (event) => {
  event.sender.send(channels.APP_INFO, { 
    appName: app.getName(),
    appVersion: app.getVersion(),
  });
});