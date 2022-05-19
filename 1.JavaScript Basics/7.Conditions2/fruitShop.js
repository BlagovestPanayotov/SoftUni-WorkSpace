function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let workingDay;
    let error = false;
    let price = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': workingDay = true;
            break;
        case 'Saturday':
        case 'Sunday': workingDay = false;
            break;
        default: error = true;
            break;
    }
    switch (fruit) {
        case 'banana':
            if (workingDay) {
                price = 2.5;
            } else {
                price = 2.7;
            }
            break;
        case 'apple':
            if (workingDay) {
                price = 1.2;
            } else {
                price = 1.25;
            }
            break;
        case 'orange':
            if (workingDay) {
                price = 0.85;
            } else {
                price = 0.9;
            }
            break;
        case 'grapefruit':
            if (workingDay) {
                price = 1.45;
            } else {
                price = 1.6;
            }
            break;
        case 'kiwi':
            if (workingDay) {
                price = 2.7;
            } else {
                price = 3;
            }
            break;
        case 'pineapple':
            if (workingDay) {
                price = 5.5;
            } else {
                price = 5.6;
            }
            break;
        case 'grapes':
            if (workingDay) {
                price = 3.85;
            } else {
                price = 4.2;
            }
            break;
        default: error = true;
            break;

    }

    if (error) {
        console.log('error');
    } else {
        console.log((price * quantity).toFixed(2));
    }

}

fruitShop(["apple",
    "Tuesday",
    "2"]);