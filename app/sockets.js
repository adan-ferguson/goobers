function setup (http) {
    "use strict";

    var io = require('socket.io')(http);
    var SocketUser = require('./socketUser.js');
    var users = {};

    io.on('connection', function(socket){

        users[socket.id] = new SocketUser(io, socket);
        socket.broadcast.emit('writeline', 'A user connected, id: ' + socket.id);
    });
}

module.exports = {
    setup: setup
};
