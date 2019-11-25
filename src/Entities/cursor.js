import { Sprite } from "./sprite";

export class Cursor extends Sprite {
    constructor(assets, ctx) {
        super(assets, "cursor");
        this.ctx = ctx;
        this.speed = 1.5;
    }

    updatePosition(e, canvas) {
        this.x += e.movementX;
        this.y += e.movementY;
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        this.x += this.velX * 1.5;
        this.y += this.velY * 1.5;
    }
}