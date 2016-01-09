"use strict";

const
	http = require("http"),
	express = require("express"),
	bodyParser = require("body-parser");

let
	app = express(),
	server = http.createServer(app),
	employeeRouter = express.Router(),
	employees = [
		{ id: 1, firstName: "Ravi", lastName: "Garlapadu" },
		{ id: 2, firstName: "Matthew", lastName: "Tebo" },
		{ id: 3, firstName: "Jason", lastName: "Brewer" },
		{ id: 4, firstName: "Tony", lastName: "Munongo" },
		{ id: 5, firstName: "John", lastName: "Mors" }
	];

function findEmployee(employeeId) {
	employeeId = parseInt(employeeId, 10);
	return employees.filter(function(employee) {
		return employee.id === employeeId;
	})[0];
}

function getEmployeeIndex(employeeId) {
	employeeId = parseInt(employeeId, 10);
	return employees.indexOf(findEmployee(employeeId));
}

employeeRouter.route("/employees")
	.get(function(req, res) {
		res.json(employees);
	})
	.post(function(req,res) {
		employees.push(req.body);
		res.status(200).end();
	});


employeeRouter.route("/employees/:employeeId")
	.get(function(req, res) {
		res.json(findEmployee(req.params.employeeId));
	})
	.put(function(req, res) {
		employees.splice(getEmployeeIndex(req.params.employeeId), 1);
		employees.push(req.body);
		res.status(200).end();
	})
	.delete(function(req, res) {
		employees.splice(getEmployeeIndex(req.params.employeeId), 1);
		res.status(200).end();
	});

app.use("/api", bodyParser.json());
app.use("/api", employeeRouter);

module.exports = {

	start: function(config, callback) {

		app.use(express.static(config.webServer.rootFolder));

		server.config = config;
		server.listen(config.webServer.port, function(err) {

			if (err) {
				console.log(err);
				return;
			}

			console.log("web server listening on port " +
				config.webServer.port);

			callback();

		});


	},

	stop: function(callback) {

		server.close(function(err) {

			if (err) {
				console.log(err);
				return;
			}

			console.log("web server stopped listening on port " +
				server.config.webServer.port);

			callback();

		});

	}

}
