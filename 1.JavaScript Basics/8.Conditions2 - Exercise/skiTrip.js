function skiTrip(input) {
    let nights = Number(input[0]) - 1;
    let room = input[1];
    let feedback = input[2];

    let priceSingleRoom = 18;
    let priceApartment = 25;
    let pricePrApartment = 35;

    let totalPrice = 0;

    switch (room) {
        case 'room for one person':
            totalPrice = nights * priceSingleRoom;
            if (feedback === 'positive') {
                totalPrice *= 1.25;
            } else {
                totalPrice *= 0.9;
            }
            break;
        case 'apartment':
            totalPrice = nights * priceApartment;
            if (nights > 15) {
                totalPrice *= 0.5;
            } else if (nights >= 10) {
                totalPrice *= 0.65;
            } else {
                totalPrice *= 0.70;
            }

            if (feedback === 'positive') {
                totalPrice *= 1.25;
            } else {
                totalPrice *= 0.9;
            }
            break;
        case 'president apartment':
            totalPrice = nights * pricePrApartment;
            if (nights > 15) {
                totalPrice *= 0.8;
            } else if (nights >= 10) {
                totalPrice *= 0.85;
            } else {
                totalPrice *= 0.9;
            }

            if (feedback === 'positive') {
                totalPrice *= 1.25;
            } else {
                totalPrice *= 0.9;
            }
            break;
    }

    console.log(totalPrice.toFixed(2));

}
skiTrip(["30",
"president apartment",
"negative"]);