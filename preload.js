const { ipcRenderer } = require('electron')

process.once('loaded', () => {
  window.addEventListener('message', evt => {
    if (evt.data.type === 'installation') {
      ipcRenderer.send('startInstall', evt.data.payload)
    }
  })
})
