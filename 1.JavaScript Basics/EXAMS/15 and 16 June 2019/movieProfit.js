function movieProfit(input){
    let name = input[0];
    let countDays = Number(input[1]);
    let countTickets = Number(input[2]);
    let priceTickets = Number(input[3]);
    let taxPercent = Number(input[4]);

    let totalPrice = (countDays*countTickets*priceTickets)*((100-taxPercent)/100);

    console.log(`The profit from the movie ${name} is ${totalPrice.toFixed(2)} lv.`);

}
movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"]);