"use strict";

const
	fs = require("fs");

fs.readFile("demo.js", "utf-8", function(err, data) {

	if (err) {
		console.log(err);
		return;
	}

	console.log("file read...");
	console.log(data);

});

console.log("some text...");
