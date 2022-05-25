function coffeeMachine(input) {

    let drink = input[0];
    let sugar = input[1];
    let countDrinks = Number(input[2]);

    let price = 0;

    switch (drink) {
        case 'Espresso':
            switch (sugar) {
                case 'Without':
                    price = 0.9;
                    break;
                case 'Normal':
                    price = 1;
                    break;
                case 'Extra':
                    price = 1.2;
                    break;
            }
            break;
        case 'Cappuccino':
            switch (sugar) {
                case 'Without':
                    price = 1;
                    break;
                case 'Normal':
                    price = 1.2;
                    break;
                case 'Extra':
                    price = 1.6;
                    break;
            }
            break;
        case 'Tea':
            switch (sugar) {
                case 'Without':
                    price = 0.5;
                    break;
                case 'Normal':
                    price = 0.6;
                    break;
                case 'Extra':
                    price = 0.7;
                    break;
            }
            break;
    }

    let totalPrice = price * countDrinks;

    if (sugar === 'Without') {
        totalPrice *= 0.65
    }

    if (drink === 'Espresso' && countDrinks >= 5) {
        totalPrice *= 0.75;
    }

    if (totalPrice > 15) {
        totalPrice *= 0.8;
    }

    console.log(`You bought ${countDrinks} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);

}
coffeeMachine(["Espresso",
    "Without",
    "6"]);