var RIGHT_KEY = 39;
var LEFT_KEY  = 37;
var UP_KEY    = 38;
var DOWN_KEY  = 40;
var A_KEY     = 65;
var S_KEY     = 83;
var D_KEY     = 68;
var F_KEY     = 70;


function Animation(config){
    this.frame_time = null;
    this.current_frame = null;
    this.current_animation = null;
    this.animations = config;
    this.stoped = false;
    this.x = 0;
    this.init();
}

Animation.prototype = {
    constructor: Animation,
    init: function(){
        var that = this;
        document.addEventListener('keydown', function(ev){
            if (ev.which === 39) {
                that.x += 1;
            }
        });
    },
    play: function(animation){
        this.frame_time = 0;
        this.current_animation = animation;
        this.current_frame = 0;
    },
    update: function(){
        var now = Date.now();
        this.frame_time += (now - game.last_time) / 1000.0;
        if (this.frame_time >= this.animations[this.current_animation]['speed']) {
            this.frame_time = 0;
            if (this.current_frame < this.animations[this.current_animation]['frames'].length - 1) {
                this.current_frame += 1;
            } else if (this.animations[this.current_animation]['loop']) {
                this.current_frame = 0;
            } else {
                this.stoped = true;
            }
        }
    },
    render: function(){
        game.canvas.drawImage(sprite_load,
            this.animations[this.current_animation]['frames'][this.current_frame]['x'],
            this.animations[this.current_animation]['frames'][this.current_frame]['y'],
            this.animations[this.current_animation]['frames'][this.current_frame]['width'],
        this.animations[this.current_animation]['frames'][this.current_frame]['heigth'],
        this.x,
        0,100,100
    );
    //game.canvas.drawImage(sprite_load, 0, 0, 70, 100, 0, 0, 100, 100);
        //console.log("The current animation playing is " + this.current_animation + " at frame " + this.current_frame + " and the time of this frame is " + this.frame_time);
    }
};
