import { Item } from "./item";

export class ItemDatabase {
    constructor(data, assets) {
        this.items = [];
        this.parseItems(data, assets, this.items);
    }

    parseItems(items, assets, itimes) {
        items.then((e) => {
            e.split("|").forEach(function(element) {
                let il = element.split(", ");
                let item = new Item(il[0], il[1], il[2], il[3], assets);
                itimes.push(item);
            });
        });
    }

    getItem(name) {
        for (let item of this.items) {
            (item.name == name) ? item: null;
        }
    }
}