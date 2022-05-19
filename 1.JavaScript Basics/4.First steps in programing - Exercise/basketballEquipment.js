function basketballEquipment(input){

    let tax = Number(input[0]);

    let snickers = tax * 0.6;
    let outfit = snickers * 0.8;
    let ball = outfit / 4;
    let accesories = ball / 5;

    let totalCost = tax + snickers + outfit + ball + accesories;

    console.log(totalCost);

}

basketballEquipment(["550 "]);
