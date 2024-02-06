"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
const store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", "1");
//# sourceMappingURL=index.js.map