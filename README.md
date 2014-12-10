# Crashlytics Plugin for Cordova/PhoneGap 3.0 (iOS and Android)


## Installation

1) Make sure that you have [Node](http://nodejs.org/) and [Cordova CLI](https://github.com/apache/cordova-cli) or [PhoneGap's CLI](https://github.com/mwbrooks/phonegap-cli) installed on your machine.

2) Add a plugin to your project using Cordova CLI:

```bash
cordova plugin add https://github.com/francescobitmunks/cordova-plugin-crashlytics
```
Or using PhoneGap CLI:

```bash
phonegap local plugin add https://github.com/francescobitmunks/cordova-plugin-crashlytics
```

## Usage

```js
function addLog() {
    crashlyticsPlugin.addLog('This my a log message from JS!');
}

function sendCrash(){
    crashlyticsPlugin.sendCrash();
}
```

## Methods

### addLog('message') - iOS
Add log for the crash.

### sendCrash() - iOS
Send a (fatal) crash to the backand of CrashLytics.

