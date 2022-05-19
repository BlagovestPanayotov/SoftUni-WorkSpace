function flowerShop(input){

    let magnoliaPrice = 3.25;
    let hyacinthsPrice = 4;
    let rosePrice = 3.5;
    let cactusPrice = 8;

    let magnoliaCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let presentPrice = Number(input[4]);

    let grossSells = magnoliaCount*magnoliaPrice + hyacinthsCount*hyacinthsPrice + roseCount*rosePrice + cactusCount*cactusPrice;
    let netSells = grossSells * 0.95;

    let diff = netSells - presentPrice;

    if(diff < 0){
        console.log(`She will have to borrow ${Math.ceil(Math.abs(diff))} leva.`);
    }else{
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    }


}

flowerShop(['15',
    '7',
    '5',
    '10',
    '100']);