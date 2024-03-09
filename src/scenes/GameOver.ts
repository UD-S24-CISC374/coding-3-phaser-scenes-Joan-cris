import Phaser from "phaser";
export type Collidable =
    | Phaser.Types.Physics.Arcade.GameObjectWithBody
    | Phaser.Tilemaps.Tile; 

export default class GameOver extends Phaser.Scene {
    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private stars?: Phaser.Physics.Arcade.Group;

    private score = 0;
    private scoreText?: Phaser.GameObjects.Text;

    private bombs?: Phaser.Physics.Arcade.Group;

    private gameOver = false;

    constructor() {
        super({ key: "GameOver" });
    }

    create() {
        const message = `Phaser v${Phaser.VERSION}`;
        this.add
            .text(this.cameras.main.width - 15, 15, message, {
                color: "#000000",
                fontSize: "24px",
            })
            .setOrigin(1, 0);

        this.add.image(400, 300, "santorini");
        this.add.text(300, 200, "Game Over", {
            color: "#FFFFFF",
            fontSize: "46px",
            fontStyle: "bold"
        });
        this.add.text(320, 300, "Try Again?", {
            color: "#FFFFFF",
            fontSize: "32px",
            fontStyle: "bold"
        });
    }

    update() {

    }
}