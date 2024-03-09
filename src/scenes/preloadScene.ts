import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("phaser-logo", "assets/img/phaser-logo.png");
        this.load.image("arena2", "assets/img/arena2.jpg");
        this.load.image("arena3", "assets/img/arena3.jpg");
        this.load.image("parthenon", "assets/img/parthenon.jpg");
        this.load.image("plaka", "assets/img/plaka.jpg");
        this.load.image("column", "assets/img/column.png");
        this.load.image("column-up", "assets/img/column-up.png");
        this.load.image("platform", "assets/img/platform.png");
        this.load.image("star", "assets/img/star.png");
        this.load.image("santorini", "assets/img/Santorini.jpg");
        this.load.image("bomb", "assets/img/bomb.png");
        this.load.spritesheet("dude", "assets/img/dude.png",
        {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.scene.start("MainScene");
    }
}
