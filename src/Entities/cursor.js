export class Cursor {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;
        this.img = new Image();
        this.img.src = "./assets/cursor.png";
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