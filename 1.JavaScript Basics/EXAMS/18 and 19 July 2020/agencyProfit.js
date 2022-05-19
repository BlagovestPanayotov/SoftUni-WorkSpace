function agencyProfit(input){
    let name = input[0];
    let countTiketsAdults = Number(input[1]);
    let countTiketChildren = Number(input[2]);
    let priceAdult = Number(input[3]);
    let tax = Number(input[4]);

    let totalTax = (countTiketChildren+countTiketsAdults)*tax;
    let totalPriceChildren = countTiketChildren*(priceAdult*0.3);
    let totalPriceAdults = countTiketsAdults*priceAdult;

    let totalPrice = totalPriceAdults+totalPriceChildren+totalTax;

    let profit = totalPrice*0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(['Ryanair',
    '60',
    '23',
    '158.96',
    '39.12'])