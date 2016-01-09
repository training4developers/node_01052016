"use strict";

const
	gulp = require("gulp"),
	fs = require("fs");

gulp.task("lint", function lintTask() {

	return new Promise(function(resolve, reject) {

			fs.readFile("package.json", "utf-8", function(err, data) {

				if (err) {
					console.log(err);
					reject();
					return;
				}

				console.log(data);
				resolve();
			});

	});

});

gulp.task("default", ["lint"], function() {

	console.log("my first gulp");

});
