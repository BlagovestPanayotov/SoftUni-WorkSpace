function computerStore(input) {

    let typeOrder = input.pop();
    let totalSum = 0;

    for (let price of input) {
        let currentPrice = Number(price);
        if (currentPrice < 0) {
            console.log('Invalid price!');
        } else {
            totalSum += currentPrice;
        }
    }

    let sumAfTax = totalSum * 1.2;

    if (totalSum > 0) {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${(sumAfTax - totalSum).toFixed(2)}$`);
        if (typeOrder === 'special') {
            sumAfTax *= 0.9;
        }
        console.log('-----------');
        console.log(`Total price: ${sumAfTax.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }

}



computerStore([
    'regular'
]);