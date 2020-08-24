const {BrowserWindow} = require('electron').remote
const path = require('path')

const showDashboardBtn = document.getElementById('show-dashboard')

showDashboardBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})