"use strict";

const
	stream = require("stream"),
	events = require("events");

let
	dataToRead = [
		0x00, 0x01, 0x02, 0x03, 0x04,
		0x05, 0x06, 0x07, 0x08, 0x09
	],
	rStream = new stream.Readable(),
	wStream = new stream.Writable();

let index = 0;

rStream._index = 0;
rStream._read = function() {
	while (rStream._index < dataToRead.length) {
		let b = new Buffer(2);
		b.writeUInt16BE(dataToRead[rStream._index++],0);
		if (!this.push(b)) { break; }
	}
};

wStream._write = function(data, encoding, cb) {
	console.log(`writing ${data.readUInt16BE(0)} ...`);
	cb();
};

rStream.pipe(wStream);
rStream.pause();

setTimeout(function() {
 	console.log("turn stream back on...");
 	rStream.resume();
},3000);
