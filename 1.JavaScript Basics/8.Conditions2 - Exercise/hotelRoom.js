function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceApartment = 0;
    let priceStudio = 0;


    switch (month) {
        case 'May':
        case 'October':
            priceApartment = 65 * nights;
            priceStudio = 50 * nights;
            if (nights > 14) {
                priceApartment *= 0.9;
                priceStudio *= 0.7;
            } else if (nights > 7) {
                priceStudio *= 0.95;
            }
            break;
        case 'June':
        case 'September':
            priceApartment = 68.70 * nights;
            priceStudio = 75.20 * nights;
            if (nights > 14) {
                priceStudio *= 0.8;
                priceApartment *= 0.9;
            }
            break;
        case 'July':
        case 'August':
            priceApartment = 77 * nights;
            priceStudio = 76 * nights;
            if (nights > 14) {
                priceApartment *= 0.9;
            }
            break;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelRoom(["August",
    "20"]);