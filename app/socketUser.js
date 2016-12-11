function SocketUser(io, socket){
    "use strict";

    socket.on('disconnect', function(){
        socket.broadcast.emit('writeline', 'A user disconnected');
    });

    socket.on('chat message', function(msg){

        socket.broadcast.emit('writeline', msg);
    });
};


module.exports = SocketUser;
