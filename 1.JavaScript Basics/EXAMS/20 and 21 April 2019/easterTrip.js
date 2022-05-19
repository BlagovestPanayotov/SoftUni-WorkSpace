function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);

    let pricePN = 0;

    switch (destination) {
        case 'France':
            switch (dates) {
                case '21-23':
                    pricePN = 30;
                    break;
                case '24-27':
                    pricePN = 35;
                    break;
                case '28-31':
                    pricePN = 40;
                    break;
            }
            break;
        case 'Italy':
            switch (dates) {
                case '21-23':
                    pricePN = 28;
                    break;
                case '24-27':
                    pricePN = 32;
                    break;
                case '28-31':
                    pricePN = 39;
                    break;
            }
            break;
        case 'Germany':
            switch (dates) {
                case '21-23':
                    pricePN = 32;
                    break;
                case '24-27':
                    pricePN = 37;
                    break;
                case '28-31':
                    pricePN = 43;
                    break;
            }
            break;

    }

    let totalPrice = pricePN * nights;

    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}

easterTrip(["France",
"28-31",
"8"])
;