function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let error = false;

    let price = 0;

    switch (city) {
        case 'Bansko':
        case 'Borovets':
            if (package === 'noEquipment') {
                price = 80;
                if (vip === 'yes') {
                    price *= 0.95;
                }
            } else if (package === 'withEquipment') {
                price = 100;
                if (vip === 'yes') {
                    price *= 0.9;
                }
            } else {
                console.log('Invalid input!');
                error = true;
            }
            break;
        case 'Varna':
        case 'Burgas':
            if (package === 'noBreakfast') {
                price = 100;
                if (vip === 'yes') {
                    price *= 0.93;
                }
            } else if (package === 'withBreakfast') {
                price = 130;
                if (vip === 'yes') {
                    price *= 0.88;
                }
            } else {
                console.log('Invalid input!');
                error = true;
            }
            break;
        default:
            console.log('Invalid input!');
            error = true;
            break;
    }

    if (days < 1) {
        console.log('Days must be positive number!');
        error = true;
    }
    if (days > 7) {
        price *= (days - 1);
    } else {
        price *= days;
    }

    if (error === false) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }



}
travelAgency(["Gabrovo",
    "noBreakfast",
    "no",
    "3"]);