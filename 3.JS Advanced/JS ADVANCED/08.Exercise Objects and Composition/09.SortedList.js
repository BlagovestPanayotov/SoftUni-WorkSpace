function createSortedList() {

    let output = {
        list: [],
        size: 0,
        add(num) {
            this.list.push(num);
            this.list.sort((a, b) => a - b);
            this.size += 1;
        },
        remove(index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.list.sort((a, b) => a - b);
                this.size -= 1;
            }
        },
        get(index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
    };

    return output;

}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(3);
list.add(3);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.list);