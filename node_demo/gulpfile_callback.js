"use strict";

const
	gulp = require("gulp"),
	fs = require("fs");

gulp.task("lint", function(cb) {
	console.log("I love to lint...");

	fs.readFile("package.json", "utf-8", function(err, data) {
		console.log(data);
		cb();
	});

});

gulp.task("default", ["lint"], function() {

	console.log("my first gulp");

});
