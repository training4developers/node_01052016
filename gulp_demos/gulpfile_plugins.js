var
	gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename");

gulp.task("compress", function() {

	gulp.src("js/src/*.js")
		.pipe(uglify())
		.pipe(rename({
      extname: '.min.js'
    }))
		.pipe(gulp.dest("js/dest"));

});

gulp.task("default", function() {

	console.log("running a gulp task");

	gulp.watch("js/src/**/*.js", ["compress"]);

});
