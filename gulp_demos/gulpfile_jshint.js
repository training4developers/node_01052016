var
	gulp = require("gulp"),
	jshint = require("gulp-jshint");

gulp.task("lint", function() {

	return gulp.src("app/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));

});

gulp.task("default", function() {
	console.log("configuring file watchers");
	gulp.watch("app/**/*.js", ["lint"]);
});
