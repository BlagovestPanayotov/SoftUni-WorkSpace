function fruitMarket(input) {
    let priceStrawberries = Number(input[0]);
    let weightBananas = Number(input[1]);
    let weightOranges = Number(input[2]);
    let weightRaspberries = Number(input[3]);
    let weightStrawberries = Number(input[4]);

    let priceRaspberries = priceStrawberries * 0.5;
    let priceOranges = priceRaspberries * 0.6;
    let priceBananas = priceRaspberries * 0.2;

    let totalPrice = priceStrawberries * weightStrawberries + weightBananas * priceBananas + weightOranges * priceOranges + weightRaspberries * priceRaspberries;

    console.log(totalPrice.toFixed(2));
}
fruitMarket(['48', '10', '3.3', '6.5', '1.7']);