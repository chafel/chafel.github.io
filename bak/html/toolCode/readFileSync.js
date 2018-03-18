var fs = require("fs");
var buf = new Buffer(fs.readFileSync(process.argv[2]));
var lnum = buf.toString().split("\n").length - 1;
console.log(lnum);

