function pets(input){

    let daysAway = Number(input[0]);
    let leftFood = Number(input[1]);
    let dogFoodPD = Number(input[2]);
    let catFoodPD = Number(input[3]);
    let turtuleFoodPD = Number(input[4]);

    let neededFood = daysAway * (dogFoodPD + catFoodPD + turtuleFoodPD/1000);
    let diff = leftFood - neededFood;

    if(diff < 0){
        console.log(`${Math.ceil(Math.abs(diff))} more kilos of food are needed.`);
    }else{
        console.log(`${Math.floor(diff)} kilos of food left.`);
    }

}

pets(['5',
    '10',
    '2.1',
    '0.8',
    '321']);