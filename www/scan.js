var exec = require('cordova/exec');
var scan = {
	recognize:function(callback,scanText) {
		exec(callback, callback, "scan", "recognize", [scanText]);
	}
};
module.exports = scan;
