function deerOfSanta(input) {
    let countDays = Number(input[0]);
    let leftFood = Number(input[1]);
    let foodPDayDeerOne = Number(input[2]);
    let foodPDayDeerTwo = Number(input[3]);
    let foodPDayDeerThree = Number(input[4]);

    let neededFood = countDays * (foodPDayDeerOne + foodPDayDeerTwo + foodPDayDeerThree);

    let diff = leftFood - neededFood;

    if (diff >= 0) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(Math.abs(diff))} more kilos of food are needed.`);
    }

}
deerOfSanta(["2", "10", "1", "1", "2"]);
console.log('------');
deerOfSanta(["5", "10", "2.1", "0.8", "11"]);
