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
        // BASIC LOADING SCREEN (TEXT ONLY)
        // ===================================

        let width = this.cameras.main.width;
        let height = this.cameras.main.height;

        let loadingText = this.add.text(width / 2, height / 2, "Loading...", {
            font: "20px Arial",
            fill: "#ffffff"
        }).setOrigin(0.5, 0.5);

        // Simulated loading bar effect
        this.load.on("progress", (value) => {
            loadingText.setText("Loading... " + parseInt(value * 100) + "%");
        });

        // ===================================
        // PLACEHOLDER ASSETS (NEXT PARTS)
        // ===================================

        // Player sprites (placeholder)
        this.load.image("player", "assets/sprites/player.png");

        // Milca sprite (placeholder)
        this.load.image("milca", "assets/sprites/milca.png");

        // Tileset placeholder (school)
        this.load.image("schoolTiles", "assets/maps/school.png");

        // UI click sound (placeholder)
        this.load.audio("click", "assets/sounds/click.mp3");

    }

    create() {

        console.log("BootScene Loaded");

        // Scale setup (pixel-perfect feel)
        this.scale.scaleMode = Phaser.Scale.FIT;
        this.scale.centerOnResize = true;

        // Smooth transition delay
        this.time.delayedCall(1000, () => {

            this.scene.start("SchoolScene");

        });

    }

}
