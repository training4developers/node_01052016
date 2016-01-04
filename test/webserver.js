"use strict";

const
	app = require("../app/index.js"),
	request = require("request"),
	assert = require("chai").assert;

describe("web server", function() {

	beforeEach(function(done) {

		app.start({
			port: 8080
		}, function() {
			done();
		});

	});

  it("load homepage", function (done) {

		request("http://localhost:8080", function(err, response, body) {

			assert.isNull(err);
			assert.equal(body, "demo web server");
			done();

		});

	});

	it("get options", function() {

		var options = app.getOptions();

		assert.isNotNull(options);
		assert.equal(options.port, 8080);

	})

	afterEach(function(done) {

		app.stop(function() {
			done();
		});

	});


});
