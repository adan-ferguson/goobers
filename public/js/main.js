(function(){
    "use strict";

    var socket = io();
    writeline('Welcome');

    socket.on('writeline', writeline);

    function writeline(msg){

        $('#chat').append($('<li>').text(msg));
    }

})();