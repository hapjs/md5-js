var fs = require('fs');
var md5 = require('./md5.js');

fs.readFile('LICENSE', function(err, buf) {
	var s = md5(buf);
	console.log('file\'s md5: ' + s);
	console.log(s === 'f0768596c8dd24914251e1d1bdb11269' ? 'pass' : 'failure');
});