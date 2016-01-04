"use strict";

const
	http = require("http");

let
	server = http.createServer(function(req, res) {
		res.end("demo web server");
	});

module.exports = {

	start: function(options, cb) {

		server.options = options;
		server.listen(options.port, function(err) {
			console.log(`web server running on port ${options.port}`);
			cb(err);
		});

	},

	stop: function(cb) {
		server.close(function(err) {
			console.log(`web server stopped running on port ${server.options.port}`);
			cb(err);
		});
	},

	getOptions: function() {
		return server.options;
	}

};
