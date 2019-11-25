export class Item {
    constructor(name, count, assets) {
        this.name = name;
        this.count = count;
        if (assets[name]) {
            this.img = assets[name];
        } else {
            this.img = assets["unknown"];
        }
    }
}