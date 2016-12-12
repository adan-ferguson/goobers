// I don't know if we need this at all
(function(Goobers){
    "use strict";

    var io;
    var Socket = {};

    Socket.connect = function(){

        io = io();
    };

    Socket.on = function(name, callback){

        io.on(name, callback);
    };

    Goobers.Socket = Socket;

})(Goobers);