// index.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

var fs = require('fs')
var gentlyCopy = require('gently-copy')

var filesToCopy = ['karma.conf.js', 'demo']

// User's local directory
// Warning: This assumes the package is installed into `node_modules/<package-name>/`
var userPath = '../../'


// If `karma.conf.js` already exists, move it to karma.conf_copy.js
var newConf = 'karma.conf.js'
var oldConf = userPath + newConf
var oldConfCopy = oldConf + userPath + 'karma.conf_copy.js'
var movedConf = false;

try {
	// fs.accessSync(oldConf)
	fs.renameSync(oldConf, oldConfCopy)
	movedConf = true;
} catch (e) {
    // No old config
}

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath)
