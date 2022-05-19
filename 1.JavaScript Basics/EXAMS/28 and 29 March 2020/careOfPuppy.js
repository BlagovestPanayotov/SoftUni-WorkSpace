function careOfPuppy(input){

    let boughtFoodKg = Number(input[0]);
    let index = 1;
    let takenFood = input[index];
    let neededFood = 0;

    while(takenFood !== 'Adopted'){
        neededFood+=Number(takenFood);
        takenFood = input[++index];
    }

    
    let boughtFoodGr = boughtFoodKg * 1000;

    let diff = boughtFoodGr - neededFood;

    if(diff >= 0){
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    }else{
        console.log(`Food is not enough. You need ${Math.abs(diff)} grams more.`);
    }

}

careOfPuppy(['2',
    '999',
    '456',
    '999',
    '999',
    '123',
    '456',
    'Adopted']);