function easterDecoration(input) {

    let priceBasket = 1.5;
    let priceWreath = 3.8;
    let priceChocolateBunny = 7;

    let countCustomers = Number(input[0]);
    let totalSells = 0;
    let index = 1;

    for (let i = 0; i < countCustomers; i++) {
        let currentSell = 0;
        let countItems = 0;
        while (input[index] !== 'Finish') {
            switch (input[index]) {
                case 'basket':
                    currentSell += priceBasket;
                    countItems++;
                    break;
                case 'wreath':
                    currentSell += priceWreath;
                    countItems++;
                    break;
                case 'chocolate bunny':
                    currentSell += priceChocolateBunny;
                    countItems++;
                    break;
            }
            index++;
        }
        if (countItems % 2 === 0) {
            currentSell *= 0.8;
        }
        console.log(`You purchased ${countItems} items for ${currentSell.toFixed(2)} leva.`);
        totalSells += currentSell;
        index++
    }

    let avaregeSpent = totalSells / countCustomers;

    console.log(`Average bill per client is: ${avaregeSpent.toFixed(2)} leva.`);

}
easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"]);