function foodForPets(input){

    let days = Number(input[0]);
    let amountFood = Number(input[1]);
    let dogFood = 0;
    let catFood = 0;
    let biscuits = 0;

    for (let index = 1; index <= days; index++) {
        dogFood += Number(input[(index*2)]);
        catFood += Number(input[((index*2)+1)]);  
        if(index%3===0){
            biscuits += (Number(input[(index*2)]) +  Number(input[((index*2)+1)]))*0.1;
        }      
    }

    let eatenFood =dogFood + catFood;
    let eatenFoodPercetn = (eatenFood / amountFood)*100;
    let dogFoodPercent = dogFood / (eatenFood/100);
    let catFoodPercent  = 100 - dogFoodPercent;

    console.log(`Total eaten biscuits: ${biscuits.toFixed(0)}gr.`);
    console.log(`${eatenFoodPercetn.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogFoodPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catFoodPercent.toFixed(2)}% eaten from the cat.`);


}

foodForPets(['3',
    '500',
    '100',
    '30',
    '110',
    '25',
    '120',
    '35']);