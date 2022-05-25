function easterBakery(input){

    let priceFlourPKg = Number(input[0]);
    let weightFlour = Number(input[1]);
    let weightSugar = Number(input[2]);
    let countEggs12 = Number(input[3]);
    let paksEast = Number(input[4]);

    let priceSugar = priceFlourPKg * 0.75;
    let priceEggs12 = priceFlourPKg * 1.1;
    let priceEast = priceSugar * 0.2;

    let price = weightFlour*priceFlourPKg+weightSugar*priceSugar+countEggs12*priceEggs12+paksEast*priceEast;

    console.log(price.toFixed(2));

}

easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"]);