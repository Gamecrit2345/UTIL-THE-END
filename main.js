// =======================================
// UNTIL THEN: MILCA
// main.js
// Game Flow Controller
// =======================================

const opening = document.getElementById("opening");
const creator = document.getElementById("creator");
const titleScreen = document.getElementById("titleScreen");
const mainMenu = document.getElementById("mainMenu");
const gameContainer = document.getElementById("gameContainer");

let gameStarted = false;

// =======================================
// INTRO SEQUENCE
// =======================================

function startIntro() {

    // Step 1: Opening logo (PIXELINDI)
    setTimeout(() => {

        opening.style.display = "none";
        creator.classList.remove("hidden");

    }, 6000);

    // Step 2: Creator screen
    setTimeout(() => {

        creator.classList.add("hidden");
        titleScreen.classList.remove("hidden");

    }, 10000);

}

// Start intro automatically
window.onload = () => {
    startIntro();
};

// =======================================
// PRESS ANY KEY
// =======================================

document.addEventListener("keydown", (e) => {

    // From title to main menu
    if (!gameStarted && !titleScreen.classList.contains("hidden")) {

        titleScreen.classList.add("hidden");
        mainMenu.classList.remove("hidden");

    }

});

// =======================================
// MENU BUTTONS
// =======================================

document.getElementById("newGame").addEventListener("click", () => {

    mainMenu.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    startGame();

});

document.getElementById("continueGame").addEventListener("click", () => {

    alert("Wala pang save system (next part ito).");

});

document.getElementById("credits").addEventListener("click", () => {

    alert("Credits screen coming soon.");

});

document.getElementById("exit").addEventListener("click", () => {

    alert("Hindi puwede i-exit sa browser demo.");

});

// =======================================
// GAME START
// =======================================

function startGame() {

    gameStarted = true;

    console.log("Game Started: Milca Story");

    // Dito natin ilalagay next:
    // - Phaser init
    // - Player system
    // - School scene

}
