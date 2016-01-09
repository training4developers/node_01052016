"use strict";

const
	app = require("./app/index"),
	fs = require("fs");

//console.dir(process.argv);

// [ '/usr/local/bin/node',
//   '/Users/ericwgreene/git/training4developers/test/index',
//   'config.json' ]

if (!process.argv[2]) {

	console.log("please specify a config file name...");
	return;

}

let
	configFileName = process.argv[2];

fs.stat(configFileName, function(err, data) {
	console.dir(data);
});

fs.readFile(process.argv[2], "utf-8", function(err, data) {

	if (err) {
		console.log(err);
		return;
	}

	app(JSON.parse(data));

});
