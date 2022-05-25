function mobileOperator(input) {
    let termContract = input[0];
    let typeContract = input[1];
    let internet = input[2];
    let months = Number(input[3]);
    let price = 0;

    if (termContract === 'one') {
        switch (typeContract) { //typeContract
            case 'Small':
                price = 9.98;
                break;
            case 'Middle':
                price = 18.99;
                break;
            case 'Large':
                price = 25.98;
                break;
            case 'ExtraLarge':
                price = 35.99;
                break;
        }
        if (internet === 'yes') { //internet
            if (price > 30) {
                price += 3.85;
            } else if (price > 10) {
                price += 4.35;
            } else {
                price += 5.5;
            }
        }
        price*=months;
    } else {
        switch (typeContract) { //typeContract
            case 'Small':
                price = 8.58;
                break;
            case 'Middle':
                price = 17.09;
                break;
            case 'Large':
                price = 23.59;
                break;
            case 'ExtraLarge':
                price = 31.79;
                break;
        }
        if (internet === 'yes') { //internet
            if (price > 30) {
                price += 3.85;
            } else if (price > 10) {
                price += 4.35;
            } else {
                price += 5.5;
            }
        }
        price*=months;
        price*=0.9625;
    }

    console.log(`${price.toFixed(2)} lv.`); 

}
mobileOperator(["two",
"Small",
"yes",
"20"]);