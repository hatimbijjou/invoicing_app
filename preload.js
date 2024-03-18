const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('author', {
    fullName: () => 'hatim bijjou'.toUpperCase(),
    isLoading: () => ipcRenderer.invoke('isLoading')
})

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})