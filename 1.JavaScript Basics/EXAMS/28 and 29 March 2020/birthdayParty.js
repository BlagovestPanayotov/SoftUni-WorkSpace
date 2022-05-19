function burthdayParty(input){

    let rent = Number(input);

    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animator = rent/3;

    let boudget = rent+cakePrice+drinksPrice+animator;

    console.log(boudget);

}

burthdayParty('3720');