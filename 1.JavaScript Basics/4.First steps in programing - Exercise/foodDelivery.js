function foodDelivery(input){

    let chickenPrice = 10.35;
    let fishPrice = 12.4;
    let veggyPrice = 8.15;

    let delivery = 2.5;

    let countChicken = Number(input[0]);
    let countFish = Number(input[1]);
    let countVeggy = Number(input[2]);

    let priceMeals = chickenPrice*countChicken + fishPrice*countFish + veggyPrice*countVeggy;
    let pricePudding = priceMeals*0.2;

    let totalPrice = priceMeals + pricePudding + delivery;

    console.log(totalPrice);

}

foodDelivery(["9 ",
"2 ",
"6 "]
);