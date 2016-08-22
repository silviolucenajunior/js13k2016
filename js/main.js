/**
 * This file contain the game loop, load of assets and some startup to game can run
 */
"use strict";

var game = {
    actual_state: null,
    player: null
};
var sprite_load = null;
var last_time = null;

var canvas = document.querySelector("#game-canvas");
var context = canvas.getContext("2d");

var animations = {
    player: {
        idle: [],
        walk: []
    }
};

var time_elapsed = 0;
var actual_frame = 0;

function playAnimation(animation, te){
    time_elapsed += te;
    console.log("te " + time_elapsed);
    var _frameToPlay = null;
    var speed = 2; //Each frame play as 2 secods per frame
    var frames = [0, 1, 2, 3, 2, 1, 0];
    //var actual_frame = 0;
    if (time_elapsed >= speed) {
        time_elapsed = 0;
        actual_frame += 1;
    }

    if (actual_frame > frames.length) {
        actual_frame = 0;
    }

    console.log(actual_frame);

    /*_frameToPlay = animations[animation]['startFrame'] + (animations[animation]['frameWidth'] * step);
    context.drawImage(sprite_load, animations[animation]['width'],  animations[animation]['height'],
        );*/
}

function game_loop(){
    var now = Date.now();
    var dt = (now - last_time) / 1000.0;
    console.log(dt);
    playAnimation('walk', dt);
    //context.drawImage(sprite_load, 10, 10, 200, 200)
    last_time = now;
    // /console.log("On Animation Frame Loop");
    requestAnimationFrame(game_loop);
}

function load_assets(){
    
}

function drawAnimation(){

}

(function(){
    sprite_load = new Image();
    sprite_load.onload = function(){
        console.log("Image Loaded");
        requestAnimationFrame(game_loop);
    }
    sprite_load.src = "/img/spritesheet.png";
})();