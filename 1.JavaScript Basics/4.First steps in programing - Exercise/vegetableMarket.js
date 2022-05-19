function vegetableMarket(input){

    let priceVeggy = Number(input[0]);
    let priceFruits = Number(input[1]);
    let quantityVeggy = Number(input[2]);
    let quantityFruits = Number(input[3]);

    let priceLeva = priceVeggy*quantityVeggy + priceFruits*quantityFruits;

    let priceEuro = priceLeva/1.94;

    console.log(priceEuro.toFixed(2));

}

vegetableMarket([1.5,
    2.5,
    10,
    10])