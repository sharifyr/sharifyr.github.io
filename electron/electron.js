"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
let mainWindow;
function createWindow() {
    const tray = new electron_1.Tray(path.join(__dirname, "../avatar.jpg"));
    const contextMenu = electron_1.Menu.buildFromTemplate([
        { "label": "Show App", "click": () => {
                mainWindow.show();
            } },
        { "label": "Quit", "click": () => {
                electron_1.app.quit();
            } }
    ]);
    tray.setToolTip("This is my application.");
    tray.setContextMenu(contextMenu);
    mainWindow = new electron_1.BrowserWindow({
        "height": 600,
        "width": 800,
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, "../index.html"));
    mainWindow.on("close", (event) => {
        event.preventDefault();
        mainWindow.hide();
        return false;
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=electron.js.map