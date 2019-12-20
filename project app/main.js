const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
    }
  });



  mainWindow.maximize();
  mainWindow.show();

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function() {

    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
  if (mainWindow === null) createWindow();
});
