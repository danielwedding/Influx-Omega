import { FileLoader } from "@outwalk/iris";
import { Keybind } from "../Configurations/keybind";
import { Player } from "../Entities/player";
import { Batch } from "../Configurations/batch";
import { Camera } from "../Configurations/camera";
import { Cursor } from "../Entities/cursor";
import { Object } from "../Configurations/object";
import { ItemDatabase } from "../ItemTypes/ItemDatabase";

export class PC {
    constructor() {
        this.assets = {
            "items": this.loadFile("../../assets/items.txt"),
            "unknown": new Object("../../assets/unknown.png"),
            "player": new Object("../../assets/player.png"),
            "cursor": new Object("../../assets/cursor.png")
        };

        this.keybinds = new Keybind();
        this.batch = new Batch();
        this.camera = new Camera(this.batch.ctx);
        this.cursor = new Cursor(this.assets, this.batch.ctx);
        let iDB = new ItemDatabase(this.assets["items"], this.assets);

        this.player = new Player(this.assets, iDB);


        this.batch.canvas.requestPointerLock = this.batch.canvas.requestPointerLock || this.batch.canvas.mozRequestPointerLock;

        document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;

        this.batch.canvas.onclick = () => {
            this.batch.canvas.requestPointerLock();
        };

        document.addEventListener("pointerlockchange", () => { this.lockChangeAlert(this.batch); }, false);
        document.addEventListener("mozpointerlockchange", () => { this.lockChangeAlert(this.batch); }, false);


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

                case "e":
                    if (this.player.inventory.open) {
                        this.player.inventory.hide();
                    } else {
                        this.player.inventory.display();
                    };

                    break;
            };
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

        this.player.addItem("unknown", null, 1);
    }

    async loadFile(url) {
        let file = await FileLoader.load(url);
        return file;
    }

    lockChangeAlert(batch) {
        if (document.pointerLockElement === batch.canvas || document.mozPointerLockElement === batch.canvas) {
            document.addEventListener("mousemove", (e) => { this.cursor.updatePosition(e, batch.canvas); }, false);
        } else {
            document.removeEventListener("mousemove", (e) => { this.cursor.updatePosition(e, batch.canvas); }, false);
        }
    }

    render() {
        this.batch.clear();
        this.camera.begin();
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