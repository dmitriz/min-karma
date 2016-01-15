// index.js

/*
 * Script to run after npm install
 *
 * Currently: copying selected files to user's directory
 */

// import shell tools for global access
// https://github.com/shelljs/shelljs#javascript
require('shelljs/global')

// TODO: Find a more robust solution
// Current user directory
var userPath = '../../'

// Moving files to the local directory
var filesToCopy = ['karma.conf.js', 'examples']

filesToCopy.forEach(function (file) {
  console.log('Copying file: ', file)
  cp('-R', file, userPath)
})
