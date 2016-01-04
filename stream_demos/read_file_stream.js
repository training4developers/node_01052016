"use strict";

const
	fs = require("fs");


var rs = fs.createReadStream("data/test.txt");

rs.on("data", function(data) {

	console.log(data.toString());

});
