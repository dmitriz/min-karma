// index.js

var packagePath = require('min-karma');

var fs = require('fs');

// Moving files to the local directory
//fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));
fs.createReadStream(packagePath + 'karma.conf.js').pipe(fs.createWriteStream('karma.conf.js'));