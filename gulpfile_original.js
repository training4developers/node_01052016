var
	gulp = require("gulp"),
	mocha = require("gulp-mocha"),
	istanbul = require("gulp-istanbul"),
	jshint = require("gulp-jshint");

gulp.task("lint", function() {

	return gulp
		.src("app/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));

});

gulp.task("init-test", function() {
	return gulp
		.src("app/**/*.js")
		.pipe(istanbul())
		.pipe(istanbul.hookRequire());
});

gulp.task("test", ["init-test"], function() {

	return gulp
		.src("test/**/*.js", { read: false })
		.pipe(mocha({reporter: 'nyan'}))
		.pipe(istanbul.writeReports())
		.pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));

});

gulp.task("default", ["lint"], function() {
	console.log("configuring file watchers");
	gulp.watch(["app/**/*.js","test/**/*.js"], ["lint"]);
});
