class List {
    #list
    constructor() {
        this.#list = [];
        this.size = this.#list.length;
    }

    add(num) {
        this.#list.push(Number(num))
        this.#list.sort((a, b) => a - b);
        this.size = this.#list.length;


    }

    remove(index) {
        if (index < 0 || index >= this.#list.length) {
            return;
        }
        this.#list.splice(index, 1);
        this.size = this.#list.length;

    }

    get(index) {
        if (index < 0 || index >= this.#list.length) {
          throw new Error('Element out of boundary');
        }

        return this.#list[index]
    }


}


let list = new List();
console.log(list.size);

list.add(5);
console.log(list.size);

list.add(6);
console.log(list.size);

list.add(7);
console.log(list.size);

console.log(list.get(1) + 'adasd');
list.remove(1);
console.log(list.size);

console.log(list.get(1) + 'asda');
console.log(list.size);
console.log(list);