export class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;
        this.img = new Image();
        this.img.src = "./assets/player.png";
        this.rotation = 90;
    }

}