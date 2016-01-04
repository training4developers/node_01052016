var gulp = require("gulp");

gulp.task("promise", function() {

	console.log("running promise");

	return new Promise(function(resolve) {

		setTimeout(function() {
			console.log("promise resolved");
			resolve();
		}, 2000);

	});
})

gulp.task("default", ["promise"], function() {

	console.log("running a gulp task");

});
