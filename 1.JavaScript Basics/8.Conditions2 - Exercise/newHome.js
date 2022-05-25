function newHome(input) {

    let flowersType = input[0];
    let countFlowers = Number(input[1]);
    let boudget = Number(input[2]);

    let priceRoses = 5;
    let priceDahlias = 3.8;
    let priceTulips = 2.8;
    let priceNarcissus = 3;
    let priceGladiolus = 2.5;

    let price = 0;

    switch (flowersType) {
        case 'Roses':
            price += priceRoses * countFlowers;
            if (countFlowers > 80) {
                price *= 0.9;
            }
            break;
        case 'Dahlias':
            price += priceDahlias * countFlowers;
            if (countFlowers > 90) {
                price *= 0.85;
            }
            break;
        case 'Tulips':
            price += priceTulips * countFlowers;
            if (countFlowers > 80) {
                price *= 0.85;
            }
            break;
        case 'Narcissus':
            price += priceNarcissus * countFlowers;
            if (countFlowers < 120) {
                price *= 1.15;
            }
            break;
        case 'Gladiolus':
            price += priceGladiolus * countFlowers;
            if (countFlowers < 80) {
                price *= 1.2;
            }
            break;
    }

    let diff = boudget - price;

    if (diff < 0) {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowersType} and ${diff.toFixed(2)} leva left.`);
    }

}
newHome(["Tulips",
"88",
"260"]);