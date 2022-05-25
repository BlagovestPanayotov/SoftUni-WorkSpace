function hollyday(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let sleepingPlace = '';
    let price = 0;
    let destination = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            sleepingPlace = 'Camp';
            price = budget * 0.3;
        } else if (season === 'winter') {
            sleepingPlace = 'Hotel';
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            sleepingPlace = 'Camp';
            price = budget * 0.4;
        } else if (season === 'winter') {
            sleepingPlace = 'Hotel';
            price = budget * 0.8
        }
    } else {
        destination = 'Europe';
        sleepingPlace = 'Hotel';
        price = budget * 0.9
    }

console.log(`Somewhere in ${destination}`);
console.log(`${sleepingPlace} - ${price.toFixed(2)}`);
}

hollyday(["678.53", "winter"]);