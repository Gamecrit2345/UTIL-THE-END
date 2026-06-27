// =======================================
// UNTIL THEN: MILCA
// BootScene.js
// Initial Loading + Setup Scene
// =======================================

class BootScene extends Phaser.Scene {

    constructor() {
        super({ key: "BootScene" });
    }

    preload() {

        // ===================================
        // LOADING UI
        // ===================================

        let width = this.cameras.main.width;
        let height = this.cameras.main.height;

        let loadingText = this.add.text(width / 2, height / 2, "Loading... 0%", {
            font: "20px Arial",
            fill: "#ffffff"
        }).setOrigin(0.5);

        // Progress update
        this.load.on("progress", (value) => {
            loadingText.setText("Loading... " + Math.floor(value * 100) + "%");
        });

        this.load.on("complete", () => {
            loadingText.setText("Press Start...");
        });

        // ===================================
        // ASSETS (SAFE PLACEHOLDERS)
        // ===================================

        // Player
        this.load.image("player", "assets/sprites/player.png");

        // Milca
        this.load.image("milca", "assets/sprites/milca.png");

        // School map placeholder
        this.load.image("schoolTiles", "assets/maps/school.png");

        // UI sound
        this.load.audio("click", "assets/sounds/click.mp3");

    }

    create() {

        console.log("BootScene Loaded");

        // ===================================
        // PIXEL / SCALE SETUP
        // ===================================

        this.scale.scaleMode = Phaser.Scale.FIT;
        this.scale.centerOnResize = true;

        // background color fallback
        this.cameras.main.setBackgroundColor("#000000");

        // ===================================
        // AUTO TRANSITION
        // ===================================

        this.time.delayedCall(1500, () => {

            this.scene.start("SchoolScene");

        });

    }

}

// IMPORTANT GLOBAL FIX
window.BootScene = BootScene;
