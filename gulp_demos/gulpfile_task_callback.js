var gulp = require("gulp");

gulp.task("callback", function(cb) {

	console.log("running callback");

	setTimeout(function() {
		console.log("callback done");
		cb();
	},2000);

});

gulp.task("default", ["callback"], function() {

	console.log("running a gulp task");

});
