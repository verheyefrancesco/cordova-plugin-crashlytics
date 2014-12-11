package com.checkroom.plugin.crashlytics;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

import com.crashlytics.android.Crashlytics;

import android.util.Log;

public class CrashlyticsPlugin extends CordovaPlugin {
	private final String pluginName = "CrashlyticsPlugin";

	private CallbackContext callbackContext;

	@Override
	public boolean execute(final String action, final JSONArray data,
			final CallbackContext callbackContext) {
		Log.d(pluginName, pluginName + " called with options: " + data);
		boolean result = false;

		if (action.equals("sendCrash")) {
			sendCrash(data, callbackContext);
		}

		this.sendCrash(data, callbackContext);

		this.callbackContext = callbackContext;

		result = true;

		return result;
	}

	public synchronized void sendCrash(final JSONArray data,
			final CallbackContext callbackContext) {
		Crashlytics.getInstance().crash();
	}
}
