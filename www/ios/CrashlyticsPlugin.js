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

CrashlyticsPlugin.prototype.setUserIdentifier = function(userIdentifier) {

    var defaults = {
      value: userIdentifier
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setUserIdentifier",
      [defaults]);
};

CrashlyticsPlugin.prototype.setUserName = function(userName) {

    var defaults = {
      value: userName
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setUserName",
      [defaults]);
};

CrashlyticsPlugin.prototype.setUserEmail = function(userEmail) {

    var defaults = {
      value: userEmail
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setUserEmail",
      [defaults]);
};

CrashlyticsPlugin.prototype.setStringValueForKey = function(value, key) {

    var defaults = {
      value: value,
      key: key
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setObjectValueForKey",
      [defaults]);
};

CrashlyticsPlugin.prototype.setIntValueForKey = function(value, key) {

    var defaults = {
      value: value,
      key: key
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setIntValueForKey",
      [defaults]);
};

CrashlyticsPlugin.prototype.setBoolValueForKey = function(value, key) {

    var defaults = {
      value: value,
      key: key
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setBoolValueForKey",
      [defaults]);
};

CrashlyticsPlugin.prototype.setFloatValueForKey = function(value, key) {

    var defaults = {
      value: value,
      key: key
    };

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setFloatValueForKey",
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