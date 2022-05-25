function fuelTank2(input){

    let fuelType = input[0].toLowerCase();
    let neededFuel = Number(input[1]);
    let hasDiscount = input[2].toLowerCase();

    let petrolPrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    if(hasDiscount === 'yes'){
        petrolPrice -= 0.18;
        dieselPrice -= 0.12;
        gasPrice -= 0.08;
    }

    let price = 0;

    switch (fuelType){
        case 'gasoline':
            price = petrolPrice * neededFuel;
            break;
        case 'diesel':
            price = dieselPrice * neededFuel;
            break;
        case 'gas':
            price = gasPrice * neededFuel;
            break;
    }

    if(neededFuel > 25){
        price *= 0.9;
    }else if(neededFuel >= 20){
        price *= 0.92;
    }

    console.log(`${price.toFixed(2)} lv.`);


}

fuelTank2(['Gasoline',
    '25',
    'No']);