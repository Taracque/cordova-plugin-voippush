# cordova-plugin-voippush

Ionic/Cordova plugin for Apple's PushKit.

## Installation

cordova plugin add https://github.com/Taracque/cordova-plugin-voippush.git

## Supported Platforms

* iOS 8.0+

## Usage

```
function initializePushKit() {
    var push = new window.VoipPush();

    push.register(function onRegistered(data) {
        console.log('VOIP PushKit registered');
        console.log(data.token);
    }, function onNotification(notification) {
        console.log('VOIP push notification received:');
        console.log(notification);
    });
}

```

The device must be `ready` in order to use the plugin. This sample function (`initializePushKit`) should be executed as following:

```
// Cordova app
document.addEventListener('deviceready', initializePushKit, false);

// OR

// Ionic v1 app
ionic.Platform.ready(initializePushKit);
```