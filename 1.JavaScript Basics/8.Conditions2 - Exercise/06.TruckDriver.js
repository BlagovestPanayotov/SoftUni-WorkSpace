function truckDriver(input) {
    let season = input[0];
    let distance = Number(input[1]);
    let price = 4;

    switch (season) {
        case 'Spring':
        case 'Autumn':
            if (distance <= 5000) {
                price *= distance * 0.75;
            } else if (distance <= 10000) {
                price *= distance * 0.95;
            } else if (distance <= 20000) {
                price *= distance * 1.45;
            }
            break;
        case 'Summer':
            if (distance <= 5000) {
                price *= distance * 0.90;
            } else if (distance <= 10000) {
                price *= distance * 1.10;
            } else if (distance <= 20000) {
                price *= distance * 1.45;
            }
            break;
        case 'Winter':
            if (distance <= 5000) {
                price *= distance * 1.05;
            } else if (distance <= 10000) {
                price *= distance * 1.25;
            } else if (distance <= 20000) {
                price *= distance * 1.45;
            }
            break;
    }

    price *= 0.9;
    console.log(price.toFixed(2));

}
truckDriver(['Summer',
    '3455'])