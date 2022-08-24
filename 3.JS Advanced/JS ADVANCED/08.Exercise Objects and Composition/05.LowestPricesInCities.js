function lowestPricesInCities(input) {

    let output = {};

    input.forEach(line => {
        let [town, product, price] = line.split(' | ');
        if (output.hasOwnProperty(product)) {
            if (output[product].price > price) {
                output[product].price = price;
                output[product].town = town;
            }
        } else {
            output[product] = { town, price: Number(price) };
        }
    });

    for (let product in output) {
        console.log(`${product} -> ${output[product].price} (${output[product].town})`);
    }


}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);