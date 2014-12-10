/**
  Phonegap ConfirmPanel Plugin
*/

var exec = require('cordova/exec');
/**
 * Constructor
 */
function CrashlyticsPlugin() {
    this._callback;
}

/**
 * show - true to show the ad, false to hide the ad
 */
CrashlyticsPlugin.prototype.show = function(options, cb) {

    var defaults = {
        title : 'Title',
        description: '',
        positiveButtonText: 'Yes',
        negativeButtonText: 'No'
    };

    for (var key in defaults) {
        if (typeof options[key] !== "undefined")
            defaults[key] = options[key];
    }
    this._callback = cb;

    exec(null, 
      null, 
      "CrashlyticsPlugin", 
      "show",
      [defaults]
    );
};

CrashlyticsPlugin.prototype._actionSelected = function(json) {
    json = json.replace(/&#34;/g, '"');
    if (this._callback)
        this._callback({status:'success', data: JSON.parse(json)});  
}

var crashlyticsPlugin = new CrashlyticsPlugin();
module.exports = crashlyticsPlugin;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.crashlyticsPlugin) {
    window.plugins.crashlyticsPlugin = crashlyticsPlugin;
}