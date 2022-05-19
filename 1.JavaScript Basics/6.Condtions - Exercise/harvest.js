function harvest(input){

    let vineSize = Number(input[0]);
    let grapePerSqMeter = Number(input[1]);
    let wantedWine = Number(input[2]);
    let workers = Number(input[3]);

    let vineForWine = vineSize * 0.4;
    let harvestGrape = vineForWine * grapePerSqMeter;
    let madeWine = harvestGrape / 2.5;

    let diff = madeWine - wantedWine;

    if(diff < 0){
        console.log(`It will be a tough winter! More ${Math.floor(Math.abs(diff))} liters wine needed.`);
    }else{
        console.log(`Good harvest this year! Total wine: ${madeWine} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / workers)} liters per person.`);
    }

}

harvest(['1020',
    '1.5',
    '425',
    '4']);