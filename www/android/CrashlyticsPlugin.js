var exec = require('cordova/exec');
/**
 * Constructor
 */
function CrashlyticsPlugin() {
    this._callback;
}

CrashlyticsPlugin.prototype.addLog = function(message) {

    var defaults = {
        message : message
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "addLog",
      [defaults]);
};

CrashlyticsPlugin.prototype.sendCrash = function() {

    var defaults = {};

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "sendCrash",
      [defaults]);
};

var crashlyticsPlugin = new CrashlyticsPlugin();
module.exports = crashlyticsPlugin;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.crashlyticsPlugin) {
    window.plugins.crashlyticsPlugin = crashlyticsPlugin;
}