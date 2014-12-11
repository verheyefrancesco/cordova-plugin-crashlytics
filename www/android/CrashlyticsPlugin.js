
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

	cordova.exec(callback, 
		null, 
		"CrashlyticsPlugin", 
		"addLog",
		[defaults]);
};

CrashlyticsPlugin.prototype.sendCrash = function() {
  
	var defaults = {};

	cordova.exec(callback, 
		null, 
		"CrashlyticsPlugin", 
		"sendCrash",
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