# ConfirmPanel Plugin for Cordova/PhoneGap 3.0 (iOS and Android)


## Installation

1) Make sure that you have [Node](http://nodejs.org/) and [Cordova CLI](https://github.com/apache/cordova-cli) or [PhoneGap's CLI](https://github.com/mwbrooks/phonegap-cli) installed on your machine.

2) Add a plugin to your project using Cordova CLI:

```bash
cordova plugin add https://francescoverheye@bitbucket.org/francescoverheye/checkroom-plugin-confirmpanel.git
```
Or using PhoneGap CLI:

```bash
phonegap local plugin add https://francescoverheye@bitbucket.org/francescoverheye/checkroom-plugin-confirmpanel.git
```

## Usage

```js
var title = "My title";
var description = "My description";
var positiveButtonText = "Yes!";
var negativeButtonText = "No!";
            
var options = {
    title: title,
    description: description,
    positiveButtonText: positiveButtonText,
    negativeButtonText: negativeButtonText
};

confirmPanelPlugin.show(options, 
    function(result){
        alert("result " + JSON.stringify(result));  
    });
}
```

## Options

### title - iOS, Android
The title for the panel.

Type: String

Default: `Title`

### description - iOS, Android
The description for the panel.

Type: String

Default: ``

### positiveButtonText - iOS, Android
Label for positive button.

Type: String

Default: `Yes`

### negativeButtonText - iOS, Android
Label for negative button.

Type: String

Default: `No`

## Requirements
- PhoneGap 3.0 or newer / Cordova 3.0 or newer
- Android 2.3.1 or newer / iOS 5 or newer

## Example

```js
var title = "My title";
var description = "My description";
var positiveButtonText = "Yes!";
var negativeButtonText = "No!";
            
var options = {
    title: title,
    description: description,
    positiveButtonText: positiveButtonText,
    negativeButtonText: negativeButtonText
};

confirmPanelPlugin.show(options, 
    function(result){
        alert("result " + JSON.stringify(result));  
    });
}
```