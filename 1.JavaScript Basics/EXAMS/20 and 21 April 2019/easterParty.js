function easterParty(input){
    let countGuest = Number(input[0]);
    let pricePP = Number(input[1]);
    let boudget = Number(input[2]);

    let priceCake = boudget * 0.1;
    if(countGuest>20){
        pricePP*=0.75;
    }else if(countGuest>15){
        pricePP*=0.80;
    }else if(countGuest>=10){
        pricePP*=0.85;
    }

    let price = countGuest*pricePP + priceCake;

    let diff = boudget - price;

    if(diff<0){
        console.log(`No party! ${Math.abs(diff).toFixed(2)} leva needed.`);
    }else{
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    }


}

easterParty(["9",
"10",
"100"]);