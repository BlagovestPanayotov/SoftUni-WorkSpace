function addBags(input){

    let priceOver20 = Number(input[0]);
    let weightOfLuggage = Number(input[1]);
    let dayToTheFlay = Number(input[2]);
    let countLuggages = Number(input[3]);

    let priceForLuggage = priceOver20;

    if(weightOfLuggage<10){
        priceForLuggage = priceOver20 * 0.2;
    }else if(weightOfLuggage<=20){
        priceForLuggage = priceOver20 * 0.5;
    }

    let totalPrice = priceForLuggage * countLuggages;

    if(dayToTheFlay > 30){
        totalPrice *= 1.1;
    }else if(dayToTheFlay >= 7){
        totalPrice *= 1.15;
    }else{
        totalPrice *= 1.4;
    }

   
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);

}

addBags(['63.80',
    '23',
    '3',
    '1']);