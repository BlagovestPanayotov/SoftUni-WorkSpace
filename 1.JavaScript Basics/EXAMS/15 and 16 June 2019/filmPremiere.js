function filmPremiere(input) {

    let name = input[0];
    let purchase = input[1];
    let countTickets = Number(input[2]);

    let price = 0;

    switch (name) {
        case 'John Wick':
            switch (purchase) {
                case 'Drink':
                    price = 12 * countTickets;
                    break;
                case 'Popcorn':
                    price = 15 * countTickets;
                    break;
                case 'Menu':
                    price = 19 * countTickets;
                    break;
            }
            break;
        case 'Star Wars':
            switch (purchase) {
                case 'Drink':
                    price = 18 * countTickets;
                    break;
                case 'Popcorn':
                    price = 25 * countTickets;
                    break;
                case 'Menu':
                    price = 30 * countTickets;
                    break;
            }
            if (countTickets >= 4) {
                price *= 0.7;
            }
            break;
        case 'Jumanji':
            switch (purchase) {
                case 'Drink':
                    price = 9 * countTickets;
                    break;
                case 'Popcorn':
                    price = 11 * countTickets;
                    break;
                case 'Menu':
                    price = 14 * countTickets;
                    break;
            }
            if (countTickets === 2) {
                price *= 0.85;
            }
            break;
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);

}
filmPremiere(["Jumanji",
"Menu",
"2"]);