function easterLunch(input){

    let countEasterBread = Number(input[0]);
    let countEggs = Number(input[1]);
    let weightCakes = Number(input[2]);

    let priceEasterBread = 3.2;
    let priceEggs12 = 4.35;
    let priceCakesPKg = 5.4;
    let colorPEgg = 0.15;

    let price = countEasterBread*priceEasterBread + countEggs*priceEggs12 + countEggs*12*colorPEgg + weightCakes*priceCakesPKg;

    console.log(price.toFixed(2));


}

easterLunch(["2",
"3",
"2"]);