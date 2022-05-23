function flowers(input) {
    let countChrysanthemum = Number(input[0]);
    let countRose = Number(input[1]);
    let countTulip = Number(input[2]);
    let season = input[3];
    let bankHoliday = input[4];

    let price = 0;

    switch (season) {
        case 'Spring':
        case 'Summer':
            price += countChrysanthemum * 2 + countRose * 4.1 + countTulip * 2.5;
            break;
        case 'Autumn':
        case 'Winter':
            price += countChrysanthemum * 3.75 + countRose * 4.5 + countTulip * 4.15;
            break;
    }

    if (bankHoliday === 'Y') {
        price *= 1.15;
    }


    if (season === 'Spring' && countTulip > 7) {
        price *= 0.95;
    }
    if (season === 'Winter' && countRose >= 10) {
        price *= 0.9;
    }
    let totalCountFlowers = countChrysanthemum + countRose + countTulip;
    if (totalCountFlowers > 20) {
        price *= 0.8;
    }
    price += 2;

    console.log(price.toFixed(2));
}
flowers(['2',
    '4',
    '8',
    'Spring',
    'Y'])