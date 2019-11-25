export class Batch {
    constructor() {
        this.canvas = document.getElementById("canva");
        this.ctx = this.canvas.getContext("2d");
    }

    clear() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    draw(object) {
        let original = 0;
        if (object.rotation) {
            original = object.rotation;

            this.ctx.translate(object.x, object.y);
            this.ctx.rotate((object.rotation)); //* Math.PI / 180);
            this.ctx.translate(-object.x, -object.y);
        };

        this.ctx.drawImage(object.img, object.x, object.y);

        if (object.rotation) {
            this.ctx.translate(object.x, object.y);
            this.ctx.rotate((-object.rotation)); // * Math.PI / 180);
            this.ctx.translate(-object.x, -object.y);
        };

        object.rotation = original;
    }

    update(object) {
        object.x += object.velX;
        object.y += object.velY;
    }
}