"use strict";

const
	path = require("path"),
	fs = require("fs");

fs.writeFile("data/output.txt", "a message", "utf-8", function(err, content) {

	if (err) {
		console.dir(err, { depth: 2, color: true });
		return;
	}

});
