/**
 * This file contain the game loop, load of assets and some startup to game can run
 */
"use strict";

var game = {
    actual_state: null,
    player: null,
    last_time: 0
};
var sprite_load = null;
var last_time = null;

var canvas = document.querySelector("#game-canvas");
var context = canvas.getContext("2d");
game.canvas = context;

var animations = {
    player: {
        idle: [],
        walk: []
    }
};

var player = new Player();

var time_elapsed = 0;
var actual_frame = 0;

function playAnimation(animation, te){
    time_elapsed += te;
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


    /*_frameToPlay = animations[animation]['startFrame'] + (animations[animation]['frameWidth'] * step);
    context.drawImage(sprite_load, animations[animation]['width'],  animations[animation]['height'],
        );*/
}

function game_loop(){
    game.canvas.clearRect(0, 0, 800, 640);
    player.update();
    console.log(player.actualEnergy);
    var now = Date.now();
    var dt = (now - last_time) / 1000.0;
    //console.log(dt);
    // player.animator.update();
    // player.animator.render();
    //playAnimation('walk', dt);
    //context.drawImage(sprite_load, 10, 10, 200, 200)
    last_time = now;
    game.last_time = now;
    // /console.log("On Animation Frame Loop");
    requestAnimationFrame(game_loop);
}

/*var player = {};
var player_animations = {
    'walk': {
        'loop': true,
        'speed': 0.2,
        'frames': [
            {x: 0, y: 0, width: 70, heigth: 100 },
            {x: 70, y: 0, width: 70, heigth: 100 },
            {x: 140, y: 0, width: 70, heigth: 100 },
            {x: 210, y: 0, width: 70, heigth: 100 },
        ]
    }
};
player.animator = new Animation(player_animations);
player.animator.play('walk');*/


(function(){
    sprite_load = new Image();
    sprite_load.onload = function(){
        game.last_time = Date.now();
        requestAnimationFrame(game_loop);
    }
    sprite_load.src = "/img/spritesheet.png";
})();
