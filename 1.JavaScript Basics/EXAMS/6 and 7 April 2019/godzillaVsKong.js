function godzillaVsKong(input){
    let budget = Number(input[0]);
    let countPpl = Number(input[1]);
    let priceOutfitPp = Number(input[2]);

    let decor = budget * 0.1;
    if(countPpl>150){
        priceOutfitPp*=0.9;
    }

    let finalPrice = decor+(countPpl*priceOutfitPp);
    
    let diff = budget-finalPrice;

    if(diff>=0){
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }else{
        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(diff).toFixed(2)} leva more.`);
    }

}
godzillaVsKong(["15437.62",
"186",
"57.99"]);