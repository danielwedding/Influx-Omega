export class Item {
    constructor(id, name, description, url, assets) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.img = assets[name];
        this.count = 0;
    }
}