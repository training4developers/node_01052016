"use strict";

const
	fs = require("fs"),
	gzip = require("zlib").createGzip();


let
	rs = fs.createReadStream("data/test.txt"),
	ws = fs.createWriteStream("data/output.gz");

rs.pipe(gzip).pipe(ws);
