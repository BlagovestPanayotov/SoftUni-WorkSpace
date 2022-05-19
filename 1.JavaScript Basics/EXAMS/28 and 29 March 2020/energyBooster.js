function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);

    fruit = fruit.toLowerCase();
    size = size.toLowerCase();

    let pricePerSet = 0;

    switch (fruit) {
        case 'watermelon':
            if (size === 'small') {
                pricePerSet = 2 * 56;
            } else {
                pricePerSet = 5 * 28.7;
            }
            break;
        case 'mango':
            if (size === 'small') {
                pricePerSet = 2 * 36.66;
            } else {
                pricePerSet = 5 * 19.60;
            }
            break;
        case 'pineapple':
            if (size === 'small') {
                pricePerSet = 2 * 42.10;
            } else {
                pricePerSet = 5 * 24.80;
            }
            break;
        case 'raspberry':
            if (size === 'small') {
                pricePerSet = 2 * 20;
            } else {
                pricePerSet = 5 * 15.20;
            }
            break;
    }

    let price = count * pricePerSet;

    if(price > 1000){
        price *= 0.5;
    }else if(price>=400){
        price *= 0.85;
    }

    console.log(`${price.toFixed(2)} lv.`);

}


energyBooster(['Pineapple',
    'small',
    '1'])
