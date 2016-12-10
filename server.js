'use strict';

debugger;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var sockets = require('./app/sockets').setup(http);

app.use(express.static(__dirname + '/public/'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});