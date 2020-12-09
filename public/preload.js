window.ipcRenderer = require('electron').ipcRenderer;

// https://github.com/electron/electron/blob/master/docs/api/shell.md#shellopenexternalurl-options
window.openExternal = (url) => require('electron').shell.openExternal(url);