function tennisEquipment(input){

    let priceTennisRocket = Number(input[0]);
    let countTennisRockets = Number(input[1]);
    let countTennisShoes = Number(input[2]);

    let priceTennisShoes = priceTennisRocket/6;

    let price = 1.2*(countTennisRockets*priceTennisRocket+countTennisShoes*priceTennisShoes);

    console.log(`Price to be paid by Djokovic ${Math.floor(price/8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(price*7/8)}`);

}
tennisEquipment(['386',
    '7',
    '4']);