export class Keybind {
    constructor() {

    }

    moveToDestination(object, destination) {
        let SPEED = 1;
        // subtract (= difference vector)
        var dx = destination.x - object.x;
        var dy = destination.y - object.y;

        // normalize (= direction vector)
        // (a direction vector has a length of 1)
        var length = Math.sqrt(dx * dx + dy * dy);
        if (length) {
            dx /= length;
            dy /= length;
        }

        // move
        // delta is the elapsed time in seconds
        // SPEED is the speed in units per second (UPS)
        object.x += dx * SPEED;
        object.y += dy * SPEED;
    }

    watchTarget(object, target) {
        let pos1 = { x: object.x, y: object.y };
        let pos2 = { x: target.x, y: target.y };

        let targetX = pos2.x - pos1.x;
        let targetY = pos2.y - pos1.y;

        return Math.atan2(targetY, targetX);
    }
}