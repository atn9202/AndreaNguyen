var background = function (window) {
    'use strict';
var tree; 
var buildings = [];
var building;
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'thistle');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
        

            var moon = draw.bitmap('https://www.pngkey.com/png/full/154-1549711_moon-edit-png-pixel-soft-mochi-freetoedit-crescent.png');
                moon.x = 1200;
                moon.y = 33;
                moon.scaleX = .3;
                moon.scaleY = .3;
                background.addChild(moon);

            
            var moon = draw.bitmap('https://www.pngkey.com/png/full/1-15550_clouds-pixel-clouds-transparent.png');
                moon.x = 700;
                moon.y = 35;
                moon.scaleX = 0.60;
                moon.scaleY = 0.60;
                background.addChild(moon);

            var moon = draw.bitmap('https://www.pngkey.com/png/full/1-15550_clouds-pixel-clouds-transparent.png');
                moon.x = 400;
                 moon.y = 30;
                 moon.scaleX = 0.60;
                moon.scaleY = 0.60;
                background.addChild(moon);
                
                var moon = draw.bitmap('https://www.pngkey.com/png/full/1-15550_clouds-pixel-clouds-transparent.png');
                moon.x = 100;
                 moon.y = 35;
                 moon.scaleX = 0.60;
                moon.scaleY = 0.60;
                background.addChild(moon);
                
                var moon = draw.bitmap('https://www.pngkey.com/png/full/1-15550_clouds-pixel-clouds-transparent.png');
                moon.x = 100;
                 moon.y = 35;
                 moon.scaleX = 0.60;
                moon.scaleY = 0.60;
                background.addChild(moon);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeight = 300;
            
            for(var i = 0 ;i < 5; i++) {
                 building = draw.rect(75,buildingHeight,'yellow','blue',1);
                 building.x = 200*i;
                 building.y = groundY-buildingHeight;
                 background.addChild(building);
                 buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('https://gm1.ggpht.com/9bTCV4nP8kCD1TKG_4YwDrPGDKfDgFW5WdMGepfxsdm6Nn10bIyPIJr1CJXqZttPQ8sI9CPko8gWo8F-fJ2-uOz-P2es0uqDo6AL8wQSUtm8_ADWYivpkGxQGUNCjzQNtCEgCgW65E8XXqseB7GXowzaEs40ohvqWEiczOTfU0PyAxpvSFpEctL7l1Y4dw3DnT-enLt5T-NB-q4siQVBnVIbEtvgWMR5MTm-p0JgsmwOeNIft4twVnSbna2qrlHsMC4FmLVO51y7XHXlTvEtyrWyLUD2MBITf0VYzC4vFJJ4oYyn3TU1IK1fafBQydVys2YhHDlueyZ7nU6jREzZ1nhATEjMXqDa3fWLfYD2tGTYNkOySeE-hk9AJhD_B91Q48C8-S76qkapWmZitbBDg8wOI7egducwYVwrm5MJXAXQxz5ImR27d7QG9coNTDbUVooy3oodqZq-22bGsZ-Ur9FmoWLi6MfMg9rJKLTBlTmKT0qTruosYic06sw-z7wzyKenz01xcisr9BgKriQ_RCwXbRbZPwRUUcNt0Ad5FR6C6FZe3hEQ0gcUYk4bUGSlx4eat59aOinPvdT5SKrepChBJBeLB2ogJc_sCVyVIUECPbGDsob5UFiErksQUfiTMDlzObUoKjUFuNyzfQVPaNF-2q8afU3Dbw5tNOQDu_xQzkN6DYTeacKGVNlIGUKuv3TCjdEo4b-MV_GSFroD-31G-X9D_aiMorjv=s0-l75-ft-l75-ft');
                tree.x = 900 ;
                tree.y = 11;
                tree.scaleX = 2.3;
                tree.scaleY = 2.3;
                background.addChild(tree);
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 4;
            if(tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            
            
            
            // TODO 5: Part 2 - Parallax
            for(var i = 0; i < 0; i++) {
                 building.x = building.x - 3;
            if (tree.x < -200) {
                tree.x = canvasWidth
                
            }
           
            
            }
            
            

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
