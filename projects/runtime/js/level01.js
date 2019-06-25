var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'duck',x:100,y:200},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
    var enemy = game.createGameItem('enemy',25);
    var redSquare = draw.rect(50,50,'red');
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
        enemy.x = 400;
        enemy.y = groundY-50;
        game.addGameItem(enemy);
        
    enemy.velocityX = -1;
    var rotationalVelocity = 10;
    
    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-10);
        
    };
    
    
    
    game.increaseScore(100);
    
    console.log('the enemy has hit halle');
    console.log('halle has hit the ememy');
    
   
    
    
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = 400;
        myObstacle.y = 300;
        game.addGameItem(myObstacle);
    
    var obstacleImage = draw.bitmap('https://www.pngkey.com/png/full/146-1463141_devil-emoji-evil-devilemoji-kawaii-cute-pixel.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        obstacleImage.scaleX = .08;
        obstacleImage.scaleY = .08;
    
    
        function createSawBlade(x,y) {
    // your code goes here
    
    function createDuck(x,y) {
        
    };
    createDuck(100,200);
    
       var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
    
    var obstacleImage = draw.bitmap('https://www.pngkey.com/png/full/146-1463141_devil-emoji-evil-devilemoji-kawaii-cute-pixel.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        obstacleImage.scaleX = .08;
        obstacleImage.scaleY = .08;
        }
    createSawBlade(1200, 320);
    createSawBlade(800, 355);    
    };
    
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;

}