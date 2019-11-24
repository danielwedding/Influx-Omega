import { Keybind } from "./keybind";
import { Player } from "./player";
import { Batch } from "./batch";
import { Camera } from "./camera";
import { Cursor } from "./cursor";

export class PC {
    constructor() {
        this.keybinds = new Keybind();
        this.player = new Player();
        this.batch = new Batch();
        this.camera = new Camera(this.batch.ctx);
        this.cursor = new Cursor(this.batch.ctx);

        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "w" || "ArrowUp":
                    this.player.velY = -5;
                    break;

                case "a" || "ArrowLeft":
                    this.player.velX = -5;
                    break;

                case "s" || "ArrowDown":
                    this.player.velY = 5;
                    break;

                case "d" || "ArrowRight":
                    this.player.velX = 5;
                    break;
            }
        });

        document.addEventListener("keyup", (e) => {
            switch (e.key) {
                case "w" || "ArrowUp":
                    this.player.velY = -0;
                    break;

                case "a" || "ArrowLeft":
                    this.player.velX = -0;
                    break;

                case "s" || "ArrowDown":
                    this.player.velY = 0;
                    break;

                case "d" || "ArrowRight":
                    this.player.velX = 0;
                    break;
            }
        });

        document.addEventListener("mousemove", (e) => {
            this.cursor.x = e.offsetX;
            this.cursor.y = e.offsetY;
        });

    }

    render() {
        this.camera.begin();

        this.batch.clear();
        this.camera.moveTo(this.player.x, this.player.y);
        this.batch.draw(this.player);
        this.batch.draw(this.cursor);

        this.camera.end();
    }

    update() {
        this.player.rotation = this.keybinds.watchTarget(this.player, this.cursor);
        this.batch.update(this.player);
    }
}