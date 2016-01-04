var
	gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	print = require("gulp-print");

gulp.task("compress", function() {

	return gulp.src("js/src/*.js")
		.pipe(uglify())
		.pipe(rename({
      extname: '.min.js'
    }))
		.pipe(gulp.dest("js/dest"))
		.pipe(print(function() {
			console.log("compress done!");
		}));

});

gulp.task("default", function() {
	console.log("running a gulp task");
	gulp.watch("js/src/**/*.js", ["compress"]);
});
