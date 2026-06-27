// =======================================
// UNTIL THEN: MILCA
// game.js
// Core Engine (FIXED)
// =======================================

// Make scenes globally available first
// (important for plain script setup)
let BootSceneClass = BootScene;
let SchoolSceneClass = SchoolScene;

// =======================================
// PHASER CONFIG
// =======================================

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
        BootSceneClass,
        SchoolSceneClass
    ]

};

// =======================================
// GAME INSTANCE
// =======================================

let game = null;

// =======================================
// START ENGINE
// =======================================

function initGameEngine() {

    if (game) return;

    game = new Phaser.Game(config);

    console.log("Game Engine Started");

}

// =======================================
// CONNECT TO MAIN.JS
// =======================================

// override startGame safely
window.startGame = function () {

    console.log("Starting Game from Menu...");

    initGameEngine();

};
