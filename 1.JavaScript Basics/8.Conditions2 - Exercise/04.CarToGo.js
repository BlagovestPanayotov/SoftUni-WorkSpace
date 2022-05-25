function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let classCar = '';
    let price = 0;
    let carType = '';

    if (season === 'Summer') {
        carType = 'Cabrio';
        if (budget <= 100) {
            classCar = 'Economy class';
            price = budget * 0.35;
        } else if (budget <= 500) {
            classCar = 'Compact class';
            price = budget * 0.45;
        } else {
            carType = 'Jeep';
            classCar = 'Luxury class';
            price = budget * 0.9;
        }
    } else if (season === 'Winter') {
        carType = 'Jeep';
        if (budget <= 100) {
            classCar = 'Economy class';
            price = budget * 0.65;
        } else if (budget <= 500) {
            classCar = 'Compact class';
            price = budget * 0.8;
        } else {
            classCar = 'Luxury class';
            price = budget * 0.9;
        }

    }

    console.log(classCar);
    console.log(`${carType} - ${price.toFixed(2)}`);

}
carToGo(['450',
    'Summer'])