import { Item } from "./item";

export class Inventory {
    constructor(assets) {
        this.items = [

        ];

        this.assets = assets;

        this.columns = 7;
        this.rows = 5;
        this.open = false;
    }

    addItem(name, type, count) {
        if (this.items.length >= ((this.columns * this.rows) + count)) {
            if (this.items.length > 0) {
                for (let item of this.items) {
                    if (item.name == name) {
                        item.count += count;
                        console.log(`${item.name}: ${item.count}`);
                    } else {
                        switch (type) {
                            case "Equipment":
                                break;

                            default:
                                this.items.push(new Item(name, count, this.assets));
                                console.log(this.items);
                                break;
                        }
                    }
                }
            }
        } else {
            switch (type) {
                case "Equipment":
                    break;

                default:
                    this.items.push(new Item(name, count, this.assets));
                    console.log(this.items);
                    break;
            }
        }
    }

    removeItem(name, count) {
        for (let x = 0; x < this.items.length; x++) {
            let item = this.items[x];
            if (item.name == name) {
                item.count -= count;
                if (item.count <= 0) {
                    this.items.splice(x, 1);
                }
            }
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

        for (let item of this.items) {
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