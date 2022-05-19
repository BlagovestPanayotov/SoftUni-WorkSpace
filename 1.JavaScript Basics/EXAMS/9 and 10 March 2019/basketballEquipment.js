function bascetballEquipment(input){

    let annualTax = Number(input[0]);

    let priceSnikers = annualTax*0.6;
    let priceOutfit = priceSnikers*0.8;
    let priceBall = priceOutfit/4;
    let priceAccesories = priceBall/5;

    let total = annualTax+priceSnikers+priceOutfit+priceBall+priceAccesories;

    console.log(total.toFixed(2));

}
bascetballEquipment(["230"]);