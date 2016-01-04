"use strict";

const
	fs = require("fs");

fs.stat("data/test2.txt", function(err, info) {

	if (err) {
		console.dir(err, { depth: true, colors: true });
		return;
	}

	console.dir(info, { depth: true, colors: true });

});
