function paintingEggs(input) {

    let sizeEggs = input[0];
    let colorEggs = input[1];
    let countEggs = Number(input[2]);

    let pricePEgg = 0;

    switch (sizeEggs) {
        case 'Large':
            if(colorEggs==='Red'){
                pricePEgg = 16;
            }else if(colorEggs==='Green'){
                pricePEgg = 12;
            }else{
                pricePEgg = 9;
            }   
            break;
        case 'Medium':
            if(colorEggs==='Red'){
                pricePEgg = 13;
            }else if(colorEggs==='Green'){
                pricePEgg = 9;
            }else{
                pricePEgg = 7;
            }
            break;
        case 'Small':
            if(colorEggs==='Red'){
                pricePEgg = 9;
            }else if(colorEggs==='Green'){
                pricePEgg = 8;
            }else{
                pricePEgg = 5;
            }
            break;
    }

    let finalPrice = (countEggs*pricePEgg)*0.65;

    console.log(`${finalPrice.toFixed(2)} leva.`);


}

paintingEggs(["Small",
"Yellow",
"3"]);