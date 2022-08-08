function storage(input) {

    let storage = new Map();

    for (let line of input) {
        line = line.split(' ');
        let name = line[0];
        let quantity = Number(line[1]);
        if (storage.has(name)) {
            quantity += storage.get(name);
        }
        storage.set(name, quantity);
    }
    
    for(let product of storage){
        console.log(`${product[0]} -> ${product[1]}`);
    }

}


storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);