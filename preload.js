const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('author', {
    fullName: () => 'hatim bijjou'.toUpperCase(),
    isLoading: () => ipcRenderer.invoke('isLoading')
})