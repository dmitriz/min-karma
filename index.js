// index.js

var path = require('path');
var fs = require('fs');

// import shell tools for global access
// https://github.com/shelljs/shelljs#javascript
require('shelljs/global');

// Current directory inside the package
var packagePath = path.resolve();
var packagePath = __dirname;

// Current directory of the user
var userPath = "../../";


console.log("packagePath is", packagePath);

// Moving files to the local directory
var filesToCopy = ['karma.conf.js', 'src'];
console.log("trying to copy files...", filesToCopy, userPath);

filesToCopy.forEach(function(file){
	// testing
	// cp('-R',  file, packagePath + '/dist');
	console.log('Copying', file); 
	cp('-R', file, userPath);
});
