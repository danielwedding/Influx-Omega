import { Item } from "./item";

export class Inventory {
    constructor(assets, ie) {
        this.db = ie;
        this.assets = assets;
        this.columns = 7;
        this.rows = 5;
        this.open = false;
    }

    addItem(name, count) {
        let item = this.db.getItem(name);
        item ? item.count += count : console.log("Unknown Item");
    }

    removeItem(name, count) {
        let item = this.db.getItem(name);
        if (item) {
            (item.count > count) ? item.count -= count: false;
        }
    }

    display() {
        this.invDisplay = document.createElement("div");
        this.invDisplay.width = this.rows;
        this.invDisplay.height = this.columns;
        this.invDisplay.style = "display: grid;";
        this.invDisplay.style.position = "absolute";
        this.invDisplay.style.top = "0px";
        this.invDisplay.style.left = "0px";

        for (let item of this.db.items) {
            this.invDisplay.appendChild(item.img);
        };

        document.body.appendChild(this.invDisplay);
        this.open = true;
    }

    hide() {
        document.body.removeChild(this.invDisplay);
        this.open = false;
    }
}