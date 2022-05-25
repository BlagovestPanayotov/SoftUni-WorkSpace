function aluminumJoinery(input) {

    let countJoinery = Number(input[0]);
    let kindJoinery = input[1];
    let delivery = input[2];

    let pricePerItem = 0;
    let price = 0;

    if(countJoinery<10){
        console.log('Invalid order');
        return;
    }
    switch (kindJoinery) {
        case '90X130':
            pricePerItem = 110;
            if (countJoinery > 60) {
                pricePerItem*=0.92;
            } else if (countJoinery > 30) {
                pricePerItem*=0.95;
            }
            break;
        case '100X150':
            pricePerItem = 140;
            if (countJoinery > 80) {
                pricePerItem*=0.90
            } else if (countJoinery > 40) {
                pricePerItem*=0.94
            }
            break;
        case '130X180':
            pricePerItem = 190;
            if (countJoinery > 50) {
                pricePerItem*=0.88;
            } else if (countJoinery > 20) {
                pricePerItem*=0.93;
            }
            break;
        case '200X300':
            pricePerItem = 250;
            if (countJoinery > 50) {
                pricePerItem*=0.86;
            } else if (countJoinery > 25) {
                pricePerItem*=0.91;
            }
            break;
        default:
            console.log('Invalid order');
            return;
    }
    if(delivery==='With delivery'){
        price+=60;
    }
    price += pricePerItem*countJoinery;
    if(countJoinery>=100){
        price*=0.96;
    }

    console.log(`${price.toFixed(2)} BGN`);


}

aluminumJoinery(["20",
"130X1180",
"With delivery"])