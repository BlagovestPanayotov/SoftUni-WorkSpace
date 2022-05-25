function changeBureau(input){

    let bitcoinToLeva = 1168;
    let cnyToDolar = 0.15;
    let dolarToLev = 1.76;
    let euroToLeva = 1.95;

    let countBitcoins = Number(input[0]);
    let countCny = Number(input[1]);
    let commision = Number(input[2]);


    let cnyInLeva = dolarToLev * (cnyToDolar * countCny);
    let bitcoinInLeva = bitcoinToLeva * countBitcoins;

    let priceInEuro = (cnyInLeva + bitcoinInLeva) / euroToLeva;

    let finalPrice = priceInEuro * (1 - commision/100);

    console.log(finalPrice.toFixed(2));

}

changeBureau(['20',
    '5678',
    '2.4']);