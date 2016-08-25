function Player(){
    this.maxHealth = 100;
    this.maxEnergy = 100;
    this.actualHealth = 100;
    this.actualEnergy = 100;
    this.status = 'PLANING';
    this.positions = {x: 0, y: 0};
    this.speed = {x: 0, y: 0};
    this._attachControls();
}

Player.prototype = {
    constructor: Player,
    checkStatus: function(){
        if (this.actualEnergy <= 0){
            //alert("Fuel empty, you are 5 seconds before fall");
        }
        if (this.actualHealth <= 0){
           // alert("YOU DIED");
        }
    },
    update: function(){
        var self = this;
        self.positions.x += self.speed.x;
        self.positions.y += self.speed.y;
        self.actualEnergy -= 1;
        self.checkStatus();
    },

    render: function(){},

    rechargeHealth: function(value){
        this.actualEnergy += this.maxHealth - this.actualHealth > value ? value : this.maxHealth - this.actualHealth;
    },
    rechargeEnergy: function(value){
        this.actualEnergy += this.maxEnergy - this.actualEnergy > value ? value : this.maxEnergy - this.actualEnergy;
    },

    _attachControls: function(){
        var self = this;
        document.addEventListener('keydown', function(ev){
            console.log(ev.which);
            switch(ev.which){
                case RIGHT_KEY: 
                    console.log("Right key pressed down");
                    self._stopAxisMove('X');
                    self._startMove('RIGHT');
                    break;
                case LEFT_KEY: 
                    console.log("Left key pressed down");
                    self._stopAxisMove('X');
                    self._startMove('LEFT');
                    break;
                case UP_KEY: 
                    console.log("up key pressed down");
                    self._stopAxisMove('Y');
                    self._startMove('UP');
                    break;
                case DOWN_KEY: 
                    console.log("down key pressed down");
                    self._stopAxisMove('Y');
                    self._startMove('DOWN');
                    break;
                case A_KEY: 
                    console.log("a key pressed down");
                    break;
                case S_KEY: 
                    console.log("s key pressed down");
                    break;
                case D_KEY: 
                    console.log("d key pressed down");
                    break;
            }
        });
        document.addEventListener('keyup', function(ev){
            switch(ev.which){
                case RIGHT_KEY: 
                    console.log("Right key pressed down");
                    self._stopAxisMove('X');
                    break;
                case LEFT_KEY: 
                    console.log("Left key pressed down");
                    self._stopAxisMove('X');
                    break;
                case UP_KEY: 
                    console.log("up key pressed down");
                    self._stopAxisMove('Y');
                    break;
                case DOWN_KEY: 
                    console.log("down key pressed down");
                    self._stopAxisMove('Y');
                    break;
                case A_KEY: 
                    console.log("a key pressed down");
                    break;
                case S_KEY: 
                    console.log("s key pressed down");
                    break;
                case D_KEY: 
                    console.log("d key pressed down");
                    break;
            }
        });
    },
    _startMove: function(direction){
        switch(direction) {
            case 'RIGHT':
                this.speed.x = 2;
                break;
            case 'LEFT':
                this.speed.x = -2;
                break;
            case 'UP':
                this.speed.y = -2;
                break;
            case 'DOWN':
                this.speed.y = 2;
                break;
        }
    },
    _stopAxisMove: function(axis){
        switch(axis) {
            case 'X':
                this.speed.x = 0;
                break;
            case 'Y':
                this.speed.y = 0;
                break;
        }
    },
    _attachCollisons: function(){}
};