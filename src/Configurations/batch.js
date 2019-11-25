export class Batch {
    constructor() {
        this.canvas = document.getElementById("canva");
        this.ctx = this.canvas.getContext("2d");
    }

    clear() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    draw(object) {
        this.ctx.save();

        if (object.rotation) {
            this.ctx.translate(object.x + object.width / 2, object.y + object.height / 2);
            this.ctx.rotate(object.rotation);
        };

        this.ctx.drawImage(object.img, object.x, object.y);

        this.ctx.restore();
    }

    update(object) {
        object.x += object.velX;
        object.y += object.velY;
    }
}