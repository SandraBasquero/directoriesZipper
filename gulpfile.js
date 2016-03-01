var gulp = require('gulp');
var fs = require('fs-extra');
var zip = require('gulp-zip');
var path = require('path');
var	folders = require('gulp-folders');

var scriptsPath = 'toZip/';


function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

var folders = getFolders(scriptsPath);

gulp.task('default', function () {
	var tasks = folders.map(function(folder) {
	  console.log(folder+" --> zipped");
	  gulp.src('toZip/'+folder+"/**").pipe(zip(folder+'.zip')).pipe(gulp.dest('zipped'));   
	});
});