var gulp = require("gulp");

gulp.task("init", function() {

	console.log("running init");

});

gulp.task("default", ["init"], function() {

	console.log("running a gulp task");

});
