package com.checkroom.plugin.crashlytics;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.util.Log;

public class CrashlyticsPlugin extends CordovaPlugin {
	private final String pluginName = "CrashlyticsPlugin";

	private static final String ARG_TITLE = "title";
	private static final String ARG_DESCRIPTION = "description";
	private static final String ARG_POSITIVE_BUTTON_TEXT = "positiveButtonText";
	private static final String ARG_NEGATIVE_BUTTON_TEXT = "negativeButtonText";

	private String mTitle;
	private String mDescription;
	private String mPositiveButtonText;
	private String mNegativeButtonText;

	private CallbackContext callbackContext;

	@Override
	public boolean execute(final String action, final JSONArray data,
			final CallbackContext callbackContext) {
		Log.d(pluginName, pluginName + " called with options: " + data);
		boolean result = false;

		this.show(data, callbackContext);

		this.callbackContext = callbackContext;

		result = true;

		return result;
	}

	public synchronized void show(final JSONArray data,
			final CallbackContext callbackContext) {
		setDefaultValues();
		readParametersFromData(data);

		showAlert();
	}

	private void setDefaultValues() {
		mTitle = "Title";
		mDescription = "";
		mPositiveButtonText = "Yes";
		mNegativeButtonText = "No";
	}

	private void readParametersFromData(JSONArray data) {
		try {
			JSONObject obj = data.getJSONObject(0);
			if (obj.has(ARG_TITLE)) {
				mTitle = obj.getString(ARG_TITLE);
			}
			if (obj.has(ARG_DESCRIPTION)) {
				mDescription = obj.getString(ARG_DESCRIPTION);
			}
			if (obj.has(ARG_POSITIVE_BUTTON_TEXT)) {
				mPositiveButtonText = obj.getString(ARG_POSITIVE_BUTTON_TEXT);
			}
			if (obj.has(ARG_NEGATIVE_BUTTON_TEXT)) {
				mNegativeButtonText = obj.getString(ARG_NEGATIVE_BUTTON_TEXT);
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}

	public void showAlert() {
		AlertDialog.Builder ad = new AlertDialog.Builder(cordova.getActivity());
		ad.setTitle(mTitle);

		if (!mDescription.equals("")) {
			ad.setMessage(mDescription);
		}
		ad.setPositiveButton(mPositiveButtonText,
				new DialogInterface.OnClickListener() {

					@Override
					public void onClick(DialogInterface dialog, int which) {
						jsActionSelected(true, mPositiveButtonText);
					}
				});
		ad.setNegativeButton(mNegativeButtonText,
				new DialogInterface.OnClickListener() {

					@Override
					public void onClick(DialogInterface dialog, int which) {
						jsActionSelected(false, mNegativeButtonText);
					}
				});
		ad.show();
	}

	/* JS */
	private void jsActionSelected(boolean isPositiveButton, String buttonText) {
		JSONObject resultObj = new JSONObject();
		try {
			if (isPositiveButton) {
				resultObj.put("action", "positiveButton");
			} else {
				resultObj.put("action", "negativeButton");
			}
			resultObj.put("buttonText", buttonText);
		} catch (JSONException e) {
			e.printStackTrace();
		}

		String result = resultObj.toString();
		callbackContext.success(result);
	}
}
