function vetParking(input) {
    let countDays = Number(input[0]);
    let hoursPDay = Number(input[1]);
    let price = 0;
    let pricePDay = 0;

    for (let i = 1; i <= countDays; i++) {
        for (let k = 1; k <= hoursPDay; k++) {
            if (i % 2 === 0 && k % 2 !== 0) {
                pricePDay += 2.5;
            } else if (i % 2 !== 0 && k % 2 === 0) {
                pricePDay += 1.25;
            } else {
                pricePDay++;
            }
        }
        console.log(`Day: ${i} - ${pricePDay.toFixed(2)} leva`);
        price += pricePDay;
        pricePDay = 0;
    }
    console.log(`Total: ${price.toFixed(2)} leva`);

}
vetParking(["5",
    "2"]);