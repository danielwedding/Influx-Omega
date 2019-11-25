import { Inventory } from "../ItemTypes/inventory";
import { Item } from "../ItemTypes/item";

export class Player {
    constructor(assets) {
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;
        this.img = assets["player"];
        this.rotation = 90;
        this.speed = 5;
        this.inventory = new Inventory(assets);
        this.equipment = {
            "head": null,
            "shoulders": null,
            "arms": null,
            "gloves": null,
            "backWeapon": null,
            "leftWeapon": null,
            "rightWeapon": null,
            "leggings": null,
            "boots": null
        };
    }

    addItem(name, type, count) {
        this.inventory.addItem(name, type, count);
    }

    removeItem(name, count) {
        this.inventory.removeItem(name, count);
    }

    equipItem(name, slot) {
        this.inventory.removeItem(name);
        this.equipment[slot].push(name);
    }

    unequipItem(name, slot) {
        this.equipment[slot] = null;
        this.inventory.push(new Item(name, 1));
    }
}