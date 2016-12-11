(function(){
    "use strict";

    var socket = io();

    socket.on('writeline', function(msg){

        $('#chat').append($('<li>').text(msg));
    });

})();