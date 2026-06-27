// =======================================
// UNTIL THEN: MILCA
// SchoolScene.js
// First Playable Map
// =======================================

class SchoolScene extends Phaser.Scene {

    constructor() {
        super({ key: "SchoolScene" });
    }

    create() {

        console.log("School Scene Loaded");

        // ===================================
        // WORLD SETUP
        // ===================================

        this.cameras.main.setBackgroundColor("#1b2a41");

        // Fake school ground (placeholder rectangle)
        let ground = this.add.rectangle(960, 540, 2000, 1200, 0x2c3e50);

        // ===================================
        // PLAYER
        // ===================================

        this.player = this.physics.add.sprite(960, 600, "player");

        this.player.setCollideWorldBounds(true);
        this.player.setScale(2);

        // ===================================
        // CAMERA FOLLOW
        // ===================================

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(1);

        // ===================================
        // CONTROLS
        // ===================================

        this.cursors = this.input.keyboard.createCursorKeys();

        this.wasd = this.input.keyboard.addKeys({
            up: "W",
            down: "S",
            left: "A",
            right: "D"
        });

        // ===================================
        // MILCA NPC (placeholder)
        // ===================================

        this.milca = this.physics.add.sprite(1100, 600, "milca");
        this.milca.setImmovable(true);
        this.milca.setScale(2);

        // ===================================
        // COLLISION
        // ===================================

        this.physics.add.collider(this.player, this.milca, () => {

            console.log("Nakilala mo si Milca...");

        });

    }

    update() {

        let speed = 5;

        this.player.setVelocity(0);

        // Movement
        if (this.cursors.left.isDown || this.wasd.left.isDown) {
            this.player.x -= speed;
        }

        if (this.cursors.right.isDown || this.wasd.right.isDown) {
            this.player.x += speed;
        }

        if (this.cursors.up.isDown || this.wasd.up.isDown) {
            this.player.y -= speed;
        }

        if (this.cursors.down.isDown || this.wasd.down.isDown) {
            this.player.y += speed;
        }

    }

}
