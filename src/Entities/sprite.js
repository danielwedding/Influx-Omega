export class Sprite {
    constructor(assets, name) {
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;

        this.img = assets[name];
        this.width = this.img.width;
        this.height = this.img.height;
    }
}