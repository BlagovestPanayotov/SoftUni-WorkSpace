function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFishermen = Number(input[2]);

    let boatPrice = 0;

    switch (season) {
        case 'Spring':
            boatPrice = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            boatPrice = 4200;
            break;
        case 'Winter':
            boatPrice = 2600;
            break;
    }

    if (countFishermen <= 6) {
        boatPrice *= 0.9;
    } else if (countFishermen <= 11) {
        boatPrice *= 0.85;
    } else {
        boatPrice *= 0.75;
    }

    if ((countFishermen % 2 === 0) && (season !== 'Autumn')) {
        boatPrice *= 0.95;
    }

    let diff = budget - boatPrice;

    if (diff < 0) {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }

}
fishingBoat(["2000",
    "Winter",
    "13"])
    ;