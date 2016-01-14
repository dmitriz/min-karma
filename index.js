// index.js

var path = require('path');
var fs = require('fs');

// import shell tools for global access
// https://github.com/shelljs/shelljs#javascript
require('shelljs/global');

// Current directory inside the package
var packagePath = path.resolve();

// Moving files to the local directory
var filesToCopy = ['karma.conf.js', 'src'];
console.log("trying to copy files...", filesToCopy);

filesToCopy.forEach(function(file){
	// testing
	// cp('-R',  file, packagePath + '/dist');
	cp('-R', file, packagePath);
	console.log('Copying', file); 
});
