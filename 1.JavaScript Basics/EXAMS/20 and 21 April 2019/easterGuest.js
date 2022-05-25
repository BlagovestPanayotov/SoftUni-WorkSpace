function easterGuest(input){
    let countGuest = Number(input[0]);
    let boudget = Number(input[1]);

    let priceEasterBread = 4;
    let priceEasterEgg = 0.45;

    let neededEastedBread = Math.ceil(countGuest/3);
    let neededEasterEggs = countGuest*2;

    let price = neededEastedBread*priceEasterBread+neededEasterEggs*priceEasterEgg;

    let diff = boudget - price;

    if(diff < 0){
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${Math.abs(diff).toFixed(2)} lv. more.`);
    }else{
        console.log(`Lyubo bought ${neededEastedBread} Easter bread and ${neededEasterEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    }


}

easterGuest(["9",
"12"]);