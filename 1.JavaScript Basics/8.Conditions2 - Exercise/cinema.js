function cinema(input) {
    let type = input[0];
    let rows = input[1];
    let seatPRow = input[2];
    let price = 0;

    switch (type) {
        case 'Premiere':
            price = rows*seatPRow*12;
            break;
        case 'Normal':
            price = rows*seatPRow*7.5;
            break;
        case 'Discount':
            price = rows*seatPRow*5;
            break;
    }

    console.log(`${price.toFixed(2)} leva`);

}
cinema(["Premiere",
    "10",
    "12"]);