// index.js

/*
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

var shells = require('shelljs')
//var cpy = require('cpy')

// Current user directory
// Warning: This assumes the package is installed into `node_modules/<package-name>/`
// TODO: Find a more robust solution
var userPath = '../../'

// Moving files to user's local directory
var filesToCopy = ['karma.conf.js', 'demo']

filesToCopy.forEach(function (file) {
  console.log('Copying file or directory: ', file)

	// https://github.com/shelljs/shelljs#javascript
  shells.cp('-R', file, userPath)
	//	cpy(file, userPath);
})
