function matchTickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let countPpl = Number(input[2]);

    let transport = 0;

    if (countPpl >= 50) {
        transport += budget * 0.25;
    } else if (countPpl >= 25) {
        transport += budget * 0.40;
    } else if (countPpl >= 10) {
        transport += budget * 0.50;
    } else if (countPpl >= 5) {
        transport += budget * 0.60;
    } else {
        transport += budget * 0.75;
    }


    let priceTicket = type === 'Normal' ? 249.99 : 499.99;

    let diff = budget - (transport + (priceTicket * countPpl));

    if (diff >= 0) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }



}
matchTickets(['30000',
    'VIP',
    '49']);