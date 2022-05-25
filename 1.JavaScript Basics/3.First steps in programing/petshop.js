function costs(input){

    let dogFoodCost = 2.5;
    let catFoodCost = 4;

    let numberDogFood = Number(input[0]);
    let numberCatFood = Number(input[1]);

    let finalCost = numberDogFood * dogFoodCost + numberCatFood * catFoodCost;

    console.log(`${finalCost} lv.`);

}

costs([13,9]);