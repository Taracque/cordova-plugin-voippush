
# Install
cordova plugin add https://github.com/Taracque/cordova-plugin-voippush.git

# API
```
var push = new window.VoipPush();
push.register(tokenCallback, notificationCallback);
```

# Example
```
var push = new VoipPush();

push.register(function(response) {

  console.log("[iOS Push] got registration token: ", response.token);
  // Save response.token as the device ID to your backend.

}, function(data) {

  console.log("[iOS Push] Received: ", data);
  
});
```
