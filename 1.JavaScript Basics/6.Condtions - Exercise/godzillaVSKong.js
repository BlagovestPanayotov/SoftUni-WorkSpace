function godzillaVSKong(input){
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let priceOutfit = Number(input[2]);

    let decor = budget * 0.1;

    let totalPriceOutfit = extraCount * priceOutfit;

    if(extraCount > 150){
        totalPriceOutfit = totalPriceOutfit * 0.9;
    }

    let total = totalPriceOutfit + decor;

    let diff = Math.abs(total - budget);

    if(total > budget){
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }else{
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

godzillaVSKong(["15437.62",
"186",
"57.99"])
