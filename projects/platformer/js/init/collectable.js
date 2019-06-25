(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.steve, 200, 180, 6, 0.7);
        collectable.create(type.max, 300, 450, 6, 0.7);
        collectable.create(type.kennedi, 800, 75, 6, 0.7);
        collectable.create(type.grace, 670, 230, 6, 0.7);
        collectable.create(type.max, 695, 460, 6, 0.7);
        collectable.create(type.max, 745, 460, 6, 0.7);
        collectable.create(type.max, 795, 460, 6, 0.7);
        collectable.create(type.max, 845, 460, 6, 0.7);
        collectable.create(type.kennedi, 695, 490, 6, 0.7);
        collectable.create(type.kennedi, 745, 490, 6, 0.7);
        collectable.create(type.kennedi, 795, 490, 6, 0.7);
        collectable.create(type.kennedi, 845, 490, 6, 0.7);
        collectable.create(type.steve, 695, 430, 6, 0.7);
        collectable.create(type.steve, 745, 430, 6, 0.7);
        collectable.create(type.steve, 795, 430, 6, 0.7);
        collectable.create(type.steve, 845, 430, 6, 0.7);
        collectable.create(type.grace, 695, 510, 6, 0.7);
        collectable.create(type.grace, 745, 510, 6, 0.7);
        collectable.create(type.grace, 795, 510, 6, 0.7);
        collectable.create(type.grace, 845, 510, 6, 0.7);
        collectable.create(type.steve, 450, 320, 6, 0.7);
        collectable.create(type.grace, 450, 325, 6, 0.7);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);