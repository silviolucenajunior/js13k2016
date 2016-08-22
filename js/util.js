var ANIMATIONS = {
    frame_width: 100
}

var timerUtil = {
    get
};

function Animation(){
    this.url = "";
    this.actual_frame = 0;
    this.animations = {
        "walk": {
            frames: [1, 2, 3],
            speed: 2
        }
    };
}