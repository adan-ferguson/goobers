function setup (http) {
    "use strict";

    var io = require('socket.io')(http);

    io.on('connection', function(socket){

        io.emit('writeline', 'A user conencted');

        socket.on('disconnect', function(){
            io.emit('writeline', 'A user disconencted');
        });

        socket.on('chat message', function(msg){

            io.emit('writeline', msg);
        });
    });
}

module.exports = {
    setup: setup
};
