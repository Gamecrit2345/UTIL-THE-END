// =======================================
// UNTIL THEN: MILCA
// SchoolScene.js
// First Playable Map (FIXED + UPGRADED)
// =======================================

class SchoolScene extends Phaser.Scene {

    constructor() {
        super({ key: "SchoolScene" });
    }

    create() {

        console.log("School Scene Loaded");

        // ===================================
        // WORLD
        // ===================================

        this.physics.world.setBounds(0, 0, 3000, 2000);

        this.cameras.main.setBackgroundColor("#1b2a41");

        // Ground (placeholder school map)
        this.ground = this.add.rectangle(1500, 1000, 3000, 2000, 0x2c3e50);

        // Enable physics for ground (invisible collision reference)
        this.physics.add.existing(this.ground, true);

        // ===================================
        // PLAYER
        // ===================================

        this.player = this.physics.add.sprite(960, 600, "player");

        this.player.setCollideWorldBounds(true);
        this.player.setScale(2);

        this.playerSpeed = 6;

        // ===================================
        // MILCA NPC
        // ===================================

        this.milca = this.physics.add.sprite(1200, 650, "milca");

        this.milca.setImmovable(true);
        this.milca.setScale(2);

        // ===================================
        // COLLISION
        // ===================================

        this.physics.add.collider(this.player, this.milca, () => {

            console.log("💬 Nakilala mo si Milca...");

            // Placeholder interaction trigger
            this.showDialogue();

        });

        // ===================================
        // CAMERA
        // ===================================

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(1.2);

        // ===================================
        // INPUT
        // ===================================

        this.cursors = this.input.keyboard.createCursorKeys();

        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D,
            E: Phaser.Input.Keyboard.KeyCodes.E
        });

        // ===================================
        // DIALOGUE FLAG
        // ===================================

        this.canTalk = false;

    }

    update() {

        this.player.setVelocity(0);

        let speed = this.playerSpeed;

        // Movement (SMOOTH STYLE FIX)
        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.player.x -= speed;
        }

        if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.player.x += speed;
        }

        if (this.cursors.up.isDown || this.keys.W.isDown) {
            this.player.y -= speed;
        }

        if (this.cursors.down.isDown || this.keys.S.isDown) {
            this.player.y += speed;
        }

        // Manual interaction key (future story system)
        if (Phaser.Input.Keyboard.JustDown(this.keys.E)) {

            if (this.player.x < this.milca.x + 80) {

                this.showDialogue();

            }

        }

    }

    // ===================================
    // DIALOGUE SYSTEM (PLACEHOLDER)
    // ===================================

    showDialogue() {

        console.log("💖 Dialogue triggered with Milca");

        // Temporary story test
        alert("Milca: Hi... bago ka lang dito diba?");

        // NEXT STEP: proper dialogue box system (HTML overlay)
    }

}

window.SchoolScene = SchoolScene;
