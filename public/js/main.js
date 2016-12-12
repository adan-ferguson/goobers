(function(Goobers){
    "use strict";

    var Main = {};
    Main.start = function(){

        Goobers.Socket.on('writeline', writeline);
        writeline('Welcome');

        Goobers.Game.start(document.getElementById('gamezone'));
    };

    function writeline(msg){

        $('#chat').append($('<li>').text(msg));
    };

    Goobers.Main = Main;

})(Goobers);