
/**
 * Constructor
 */
function ConfirmPanelPlugin() {
  //this._callback;
}

/**
 * show - true to show the ad, false to hide the ad
 */
ConfirmPanelPlugin.prototype.show = function(options, cb) {
  
	var defaults = {
        title: 'Title',
        description: '',
        positiveButtonText: 'Yes',
        negativeButtonText: 'No'
    };

	for (var key in defaults) {
		if (typeof options[key] !== "undefined") {
			defaults[key] = options[key];
		}
	}

	//this._callback = cb;

	var callback = function(message) {
		var m = '' + message;
		if(m == 'cancelled'){
			cb({status: 'cancelled'});
		} else{
			m = m.replace(/&#34;/g, '"');
			cb({status:'success', data: JSON.parse(m)});
		}
	}
  
	cordova.exec(callback, 
		null, 
		"ConfirmPanelPlugin", 
		defaults.title,
		[defaults]
	);
};

var confirmPanel = new ConfirmPanelPlugin();
module.exports = confirmPanel;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.confirmPanel) {
    window.plugins.confirmPanel = confirmPanel;
}