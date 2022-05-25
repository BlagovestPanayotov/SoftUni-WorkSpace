function familyTrip(input) {
    let budget = Number(input[0]);
    let countNumghts = Number(input[1]);
    let pricePNight = Number(input[2]);
    let percentExtra = Number(input[3]);

    if (countNumghts > 7) {
        pricePNight *= 0.95;
    }
    let totalPrice = countNumghts * pricePNight + budget * percentExtra / 100;

    let diff = budget - totalPrice;

    if (diff >= 0) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${Math.abs(diff).toFixed(2)} leva needed.`);
    }

}
familyTrip(["500",
    "7",
    "66",
    "15"]);