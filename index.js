// index.js

var path = require('path');
var fs = require('fs');
//var cpy = require('cpy');

require('shelljs/global');


// Current directory inside the package
var packagePath = path.resolve();

console.log(packagePath);

var filesToCopy = [
	'karma.conf.js', 
	'src/add.js',
	'src/add_test.js'
];

filesToCopy.forEach(function(file){
	//fs.writeFileSync('dist/' + file, fs.readFileSync(file));

	// copy file to current directory
	//cp('-R', path.resolve(packagePath, file), '.');
	cp('-R',  './' + file, packagePath);
	console.log('Copying', file); 
});

// Moving files to the local directory

// cpy(filesToCopy, '.']).then(function(result) {
// 	console.log(result, 'files copied');
// });

//fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));

//fs.createReadStream(packagePath + '/karma.conf.js').pipe(fs.createWriteStream('karma.conf.js'));