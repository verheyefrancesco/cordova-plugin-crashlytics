
/**
 * Constructor
 */
function CrashlyticsPlugin() {
  //this._callback;
}

CrashlyticsPlugin.prototype.addLog = function(message) {
  
	var defaults = {
        message: message
    };

	cordova.exec(null, 
		null, 
		"CrashlyticsPlugin", 
		"addLog",
		[defaults]);
};

CrashlyticsPlugin.prototype.sendCrash = function(message) {
  
	var defaults = {message: message};

	cordova.exec(null, 
		null, 
		"CrashlyticsPlugin", 
		"sendCrash",
		[defaults]);
};

CrashlyticsPlugin.prototype.sendNonFatalCrash = function(message) {
  
	var defaults = {message: message};

	cordova.exec(null, 
		null, 
		"CrashlyticsPlugin", 
		"sendNonFatalCrash",
		[defaults]);
};

CrashlyticsPlugin.prototype.setUserIdentifier = function(userIdentifier) {

    var defaults = {
      value: userIdentifier
    };

    cordova.exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setUserIdentifier",
      [defaults]);
};

CrashlyticsPlugin.prototype.setUserName = function(userName) {

    var defaults = {
      value: userName
    };

    cordova.exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setUserName",
      [defaults]);
};

CrashlyticsPlugin.prototype.setUserEmail = function(userEmail) {

    var defaults = {
      value: userEmail
    };

    cordova.exec(null, 
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

     cordova.exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setStringValueForKey",
      [defaults]);
};

CrashlyticsPlugin.prototype.setIntValueForKey = function(value, key) {

    var defaults = {
      value: value,
      key: key
    };

     cordova.exec(null, 
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

     cordova.exec(null, 
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

     cordova.exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "setFloatValueForKey",
      [defaults]);
};



var crashlyticsPanel = new CrashlyticsPlugin();
module.exports = crashlyticsPanel;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.crashlyticsPanel) {
    window.plugins.crashlyticsPanel = crashlyticsPanel;
}