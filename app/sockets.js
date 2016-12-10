function setup (http) {
    "use strict";

    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('a user connected', socket);
    });
}

module.exports = {
    setup: setup
};
