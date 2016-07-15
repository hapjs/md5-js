#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var fs = require('fs');
var path = require('path');
var md5 = require('../md5.js');

var target = process.argv[2];
var pathToTarget = target;

if (fs.existsSync(pathToTarget)) {
	fs.readFile(pathToTarget, function(err, buf) {
		if(err) throw err;
		console.log('file md5: ' + md5(buf));
	});
} else {
	console.log('string md5: ' + md5(target));
}