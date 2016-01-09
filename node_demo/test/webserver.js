"use strict";

const
	app = require("../app/index.js"),
	request = require("request"),
	assert = require("chai").assert;

describe("web server", function() {

	beforeEach(function(done) {

		app.start({
			webServer: {
				rootFolder: "app/www",
				port: 8080
			}
		}, function() {
			done();
		});

	});

  it("load homepage", function (done) {

		request("http://localhost:8080", function(err, response, body) {

			assert.isNull(err);
			assert.isNotNull(body);
			done();

		});

	});

	it("load employees", function (done) {

		request("http://localhost:8080/api/employees", function(err, response, body) {

			var employees = JSON.parse(body);
			assert.equal(5, employees.length);

			done();

		});

	});

	it("load an employee", function (done) {

		request("http://localhost:8080/api/employees/2", function(err, response, body) {

			var employee = JSON.parse(body);
			assert.equal(2, employee.id);

			done();

		});

	});
	afterEach(function(done) {

		app.stop(function() {
			done();
		});

	});


});
