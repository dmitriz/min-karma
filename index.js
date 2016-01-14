// index.js

var path = require('path');
var fs = require('fs');

// import shell tools for global access
// https://github.com/shelljs/shelljs#javascript
require('shelljs/global');

// TODO: Find a more robust solution
// Current user directory
var userPath = "../..";

// Moving files to the local directory
var filesToCopy = ['karma.conf.js', 'src'];

filesToCopy.forEach(function(file){
	console.log('Copying', file); 
	cp('-R', file, userPath);
});
