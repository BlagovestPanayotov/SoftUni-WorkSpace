function poolDay(input) {
    let countPPL = Number(input[0]);
    let enteryTax = Number(input[1]);
    let priceSunbed = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let totalPrice = (enteryTax * countPPL) + (Math.ceil(countPPL * 0.75) * priceSunbed) + (Math.ceil(countPPL / 2) * priceUmbrella);

    console.log(`${totalPrice.toFixed(2)} lv.`);

}
poolDay(["100",
    "8",
    "6",
    "4"]);