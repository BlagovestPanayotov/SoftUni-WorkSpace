function storeProvision(store, delivery) {

    let storeAsObj = {};

    for (let i = 0; i < store.length; i += 2) {
        let key = store[i];
        let value = store[i + 1];

        storeAsObj[key] = Number(value);
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let key = delivery[i];
        let value = Number(delivery[i + 1]);
        if (!storeAsObj.hasOwnProperty(key)) {
            storeAsObj[key] = 0;
        }
            storeAsObj[key] += value;
        

    }

    for(let product in storeAsObj){
        console.log(`${product} -> ${storeAsObj[product]}`);
    }

}



storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);