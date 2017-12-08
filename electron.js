const Electron = require('electron');
const Path = require('path');
const Url = require('url');

const App = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

let window;

function createWindow () {
	window = new BrowserWindow({});

	window.maximize();

	window.loadURL(Url.format({
		pathname: Path.join(__dirname, './build/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	//window.webContents.openDevTools();

	window.on('closed', () => {
		window = null;
	});
}

App.on('ready', createWindow);

App.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		App.quit();
	}
});

App.on('activate', () => {
	if (window === null) {
		createWindow();
	}
});