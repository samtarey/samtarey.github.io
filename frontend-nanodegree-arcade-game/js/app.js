// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.enemyPosX = x;
    this.enemyPosY = y;
    this.enemySpeed = speed;
    console.log("INSIDE ENEMY CONSTRUCTOR: I am " + this);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.enemyPosX = this.enemyPosX + this.enemySpeed;
    //if enemy reaches the right most edge, bring the enemy back to left edge.
    if (this.enemyPosX>605) {
        this.enemyPosX = -300;
    }
    //Bring player back to original position when enemy touches player
    if ((((this.enemyPosX+90)>=player.playerPosX) && ((this.enemyPosX+90)<=(player.playerPosX+90))) && 
        (((this.enemyPosY+80)>=player.playerPosY) && ((this.enemyPosY+80)<=(player.playerPosY+90)) ||
            ((this.enemyPosY>player.playerPosY) && (this.enemyPosY+80<player.playerPosY)))) {
        player.playerPosX = ctx.canvas.width/2-50;
        player.playerPosY = ctx.canvas.height/2+100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.enemyPosX, this.enemyPosY);
    //console.log("INSIDE ENEMY RENDER FUNCTION: I am " + this.sprite);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.playerPosX = x;
    this.playerPosY = y;
    this.sprite = 'images/char-boy.png';
    console.log("INSIDE PLAYER CONSTRUCTOR: I am " + this);
    console.log("INSIDE PLAYER CONSTRUCTOR, PLAYER POSITION: " + this.playerPosX + " , " + this.playerPosY);
};

Player.prototype.update = function(dt) {
    this.playerPosX = this.playerPosX + 0;
    this.playerPosY = this.playerPosY + 0;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.playerPosX, this.playerPosY);
    //console.log("INSIDE PLAYER RENDER FUNCTION: I am " + this.sprite);
};

Player.prototype.handleInput = function(key) {
    if((key=='left') && (this.playerPosX>=0)) {
        this.playerPosX = this.playerPosX-10;
    } else if((key=='up') && (this.playerPosY>=0)) {
        this.playerPosY = this.playerPosY-10;
    } else if((key=='right') && (this.playerPosX<=410)) {
        this.playerPosX = this.playerPosX+10;
    } else if((key=='down') && (this.playerPosY<=425)) {
        this.playerPosY = this.playerPosY+10;
    } 
    //If player touches water, player goes back to original position. 
    //Instead of this.playerPosY if I use player.playerPosX, the program works the same way.
    //********************CHECK IF this AND player are the same objects.
    if (player.playerPosY<=70) {
        player.playerPosX = ctx.canvas.width/2-50;
        player.playerPosY = ctx.canvas.height/2+100;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(ctx.canvas.width/2-50, ctx.canvas.height/2+100);
var enemy1 = new Enemy(0, 65, 1);
var enemy2 = new Enemy(-35, 150, 1);
var enemy3 = new Enemy(-65, 230, 3);
var enemy4 = new Enemy(-200, 65, 2);
var enemy5 = new Enemy(-300, 150, 1);
var enemy6 = new Enemy(-500, 230, 3);

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
