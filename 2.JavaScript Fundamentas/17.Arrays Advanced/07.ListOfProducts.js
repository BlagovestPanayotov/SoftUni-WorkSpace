listOfProducts = products =>
    products
        .sort()
        .map((x, i) => `${i + 1}.${x}`)
        .join('\n');
console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
console.log(listOfProducts(['Watermelon', 'Banana', 'Apples']));