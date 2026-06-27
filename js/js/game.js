// =======================================
// UNTIL THEN: MILCA
// game.js
// Core Game Engine (Phaser 3)
// =======================================

// Game configuration
const config = {

    type: Phaser.AUTO,

    width: 1920,
    height: 1080,

    parent: "gameContainer",

    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scene: [
        BootScene,
        SchoolScene
    ]

};

// Global game instance
let game;

// =======================================
// START GAME ENGINE
// =======================================

function initGameEngine() {

    game = new Phaser.Game(config);

}

// =======================================
// CALL FROM MAIN.JS
// =======================================

function startGame() {

    console.log("Initializing Game Engine...");

    initGameEngine();

}
