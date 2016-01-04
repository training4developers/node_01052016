var gulp = require("gulp");

gulp.task("default", function() {

	console.log("running a gulp task");

	// glob: watch all JavaScript files including subfolders, but ignore the gulpfile
	var watcher = gulp.watch(["**/*.js", "!gulpfile.js"]);

	watcher.on("change", function(e) {
		console.log("change file event, file path: " + e.path);
	});
	watcher.on("add", function(e) {
		console.log("add file event, file path: " + e.path);
	});
	watcher.on("delete", function(e) {
		console.log("delete file event, file path: " + e.path);
	});

});
