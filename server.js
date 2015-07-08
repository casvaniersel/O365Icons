/// <reference path="typings/node/node.d.ts"/>

var port = process.env.PORT || 1337;
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + "/dist"));

console.log("Starting server on port " + port + "...");
app.listen(port);