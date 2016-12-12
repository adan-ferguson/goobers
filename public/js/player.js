(function(Goobers){
    "use strict";

    function Player(local){

        if(local){
            this.isLocal = true;
            Player.localPlayer = this;
        }
    }

})(Goobers);