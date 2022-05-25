function club(input) {
    let target = Number(input[0]);
    let index = 1;
    let income = 0;

    while (true) {
        let coctailName = input[index];
        index++;
        if (coctailName === 'Party!') {
            console.log(`We need ${target.toFixed(2)} leva more.`);
            break;
        }
        let priceCoctail = coctailName.length;
        let countCoctail = Number(input[index]);
        index++;
        priceCoctail *= countCoctail

        if (priceCoctail % 2 !== 0) {
            priceCoctail *= 0.75;
        }
        target -= priceCoctail;
        income += priceCoctail;
        if (target <= 0) {
            console.log('Target acquired.');
            break;
        }
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);

}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"]);