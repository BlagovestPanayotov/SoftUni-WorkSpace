function bikeRace(input) {
    let juniorRiders = Number(input[0]);
    let seniorRiders = Number(input[1]);
    let typeRice = input[2];

    let ticketPrice = 0;

    switch (typeRice) {
        case 'trail':
            ticketPrice = seniorRiders * 7 + juniorRiders * 5.50;
            break;
        case 'cross-country':
            ticketPrice = seniorRiders * 9.50 + juniorRiders * 8;
            break;
        case 'downhill':
            ticketPrice = seniorRiders * 13.75 + juniorRiders * 12.25;
            break;
        case 'road':
            ticketPrice = seniorRiders * 21.50 + juniorRiders * 20;
            break;
    }

    if (typeRice === 'cross-country' && (seniorRiders + juniorRiders) >= 50) {
        ticketPrice *= 0.75;
    }

    let totalPrice = ticketPrice * 0.95;

    console.log(totalPrice.toFixed(2));

}
bikeRace(['10',
    '20',
    'trail'])