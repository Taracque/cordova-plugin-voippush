var exec = cordova.require('cordova/exec');

var VoipPush = function() {
	console.log('VoipPush instanced');
};

VoipPush.prototype.register = function(tokenCallback,notificationCallback) {
	if (!tokenCallback) { tokenCallback = function() {}; }
	if (!notificationCallback) { notificationCallback = function() {}; }

	var errorCallback = function() {};
	var successCallback = function(obj) {
		if (obj.hasOwnProperty('token')) {
			tokenCallback(obj);
		} else if (obj.hasOwnProperty('payload')) {
			notificationCallback(obj);
		}
	};

	exec(successCallback, errorCallback, 'VoipPush', 'voipRegistration' );
};

if (typeof module != 'undefined' && module.exports) {
	module.exports = VoipPush;
}