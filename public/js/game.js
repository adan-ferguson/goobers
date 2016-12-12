(function(Goobers){
    "use strict";

    var Game = {};
    var phaserGame;

    Game.start = function(gamezone){

        phaserGame = new Phaser.Game();
    };

    Goobers.Game = Game;

})(Goobers);