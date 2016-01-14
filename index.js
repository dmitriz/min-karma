// index.js

var path = require('path');
var fs = require('fs');
//var cpy = require('cpy');

// Current directory inside the package
var packagePath = path.resolve();

var filesToCopy = ['karma*', 'src'];

var sourceFile = 'one';
var targetFile = 'two';


// Moving files to the local directory

// cpy(filesToCopy, '.']).then(function(result) {
// 	console.log(result, 'files copied');
// });

fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));

//fs.createReadStream(packagePath + '/karma.conf.js').pipe(fs.createWriteStream('karma.conf.js'));