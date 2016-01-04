"use strict";

const
	path = require("path"),
	fs = require("fs");

fs.readFile("data/test.txt", "utf-8", function(err, content) {

	if (err) {
		console.dir(err, { depth: 2, color: true });
		return;
	}

	console.dir(content, { depth: 2, color: true });

});
