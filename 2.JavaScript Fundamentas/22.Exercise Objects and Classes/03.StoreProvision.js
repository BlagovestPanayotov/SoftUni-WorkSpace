function storeProvision(store, delivery) {

    let storeAsArr = store;
    let deliveryAsArr = delivery;

    let storeAsObj = {};
    // let deliveryAsObj = {};

    for (let i = 0; i < storeAsArr.length; i += 2) {
        let key = storeAsArr[i];
        let value = storeAsArr[i + 1];

        storeAsObj[key] = Number(value);
    }

    for (let i = 0; i < deliveryAsArr.length; i += 2) {
        let key = deliveryAsArr[i];
        let value = deliveryAsArr[i + 1];
        if (storeAsObj[key] === undefined) {
            storeAsObj[key] = Number(value);
        } else {
            storeAsObj[key] += Number(value);
        }

    }

    for(let key of Object.keys(storeAsObj)){
        console.log(`${key} -> ${storeAsObj[key]}`);
    }

    // console.log(JSON.stringify(storeAsObj));

}



storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);