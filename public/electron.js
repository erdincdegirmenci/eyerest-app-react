const { app, BrowserWindow, Tray, Menu, nativeImage, ipcMain, Notification } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development' || process.env.ELECTRON_IS_DEV === '1' || !app.isPackaged;
const { translations } = require('../src/i18n');

// Icon yolunu hem dev hem de prod için ayarla
const iconPath = isDev 
  ? path.join(__dirname, 'mainicon.ico')
  : path.join(__dirname, '../build/mainicon.ico');

let mainWindow;
let tray = null;
let currentLanguage = 'tr'; // Default language

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 360,
    height: 360,
    resizable: false,
    roundedCorners: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#eaf6f7',
    icon: iconPath,
  });

  console.log('isDev', isDev);
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => (mainWindow = null));
  // Maximize ve resize olaylarını engelle
  mainWindow.on('maximize', (e) => {
    mainWindow.unmaximize();
  });
  mainWindow.on('will-resize', (e) => {
    e.preventDefault();
  });
  mainWindow.on('enter-full-screen', (e) => {
    mainWindow.setFullScreen(false);
  });
  mainWindow.on('leave-full-screen', (e) => {
    mainWindow.setFullScreen(false);
  });
  // Windows'ta çift tıklama ile maximize'ı engelle
  if (process.platform === 'win32' && mainWindow.hookWindowMessage) {
    mainWindow.hookWindowMessage(0x00A3, () => {
      return true;
    });
  }
}

function updateTrayMenu() {
  const contextMenu = Menu.buildFromTemplate([
    { label: translations[currentLanguage].mainScreen, click: () => mainWindow.show() },
    { label: translations[currentLanguage].quit, click: () => app.quit() },
  ]);
  tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
  createWindow();

  // Tray icon
  tray = new Tray(nativeImage.createFromPath(iconPath));
  updateTrayMenu();
  tray.setToolTip('EyeRest');

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Renderer'dan gelen bildirim isteğini dinle
ipcMain.on('show-break-notification', (event, data) => {
  const notification = new Notification({
    title: data.title || 'EyeRest',
    body: data.message || 'Gözlerini dinlendirme zamanı!',
    icon: data.icon || path.join(__dirname, 'public', 'mainicon2.png'),
    silent: false,
    urgency: 'high',
    timeoutType: 'default',
    actions: [
      {
        type: 'button',
        text: 'Tamam'
      }
    ]
  });

  // Bildirimi sağ alt köşede göster
  notification.show();

  // Bildirime tıklandığında pencereyi göster
  notification.on('click', () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  // Bildirime tıklandığında pencereyi göster
  notification.on('action', () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();
    }
  });
});

ipcMain.on('show-app-window', () => {
  if (mainWindow) {
    // Ekran boyutunu al
    const { width, height } = mainWindow.getBounds();
    const { screen } = require('electron');
    const { workArea } = screen.getPrimaryDisplay();
    // Sağ alt köşe için konum hesapla
    const x = workArea.x + workArea.width - width - 16; // 16px margin
    const y = workArea.y + workArea.height - height - 16;
    mainWindow.setPosition(x, y);
    mainWindow.show();
    mainWindow.focus();
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
    setTimeout(() => mainWindow.setAlwaysOnTop(false), 5000);
  }
});

ipcMain.on('hide-app', () => {
  if (mainWindow) mainWindow.hide();
});

// Add language change handler
ipcMain.on('change-language', (event, lang) => {
  currentLanguage = lang;
  updateTrayMenu();
});
