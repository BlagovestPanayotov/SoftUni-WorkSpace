function smallShop(input){

    let product = input[0];
    let city = input[1];
    let countProduct = Number(input[2]);

    let price = 0;

    switch(city){
        case 'Sofia':
            switch(product){
                case 'coffee':
                    price = countProduct * 0.5;
                    break;
                case 'water':
                    price = countProduct * 0.8;
                    break;
                case 'beer':
                    price = countProduct * 1.2;
                    break;
                case 'sweets':
                    price = countProduct * 1.45;
                    break;
                case 'peanuts':
                    price = countProduct * 1.6;
                    break;
            }
            break;
        case 'Plovdiv':
            switch(product){
                case 'coffee':
                    price = countProduct * 0.4;
                    break;
                case 'water':
                    price = countProduct * 0.7;
                    break;
                case 'beer':
                    price = countProduct * 1.15;
                    break;
                case 'sweets':
                    price = countProduct * 1.30;
                    break;
                case 'peanuts':
                    price = countProduct * 1.5;
                    break;
            }
            break;
        case 'Varna':
            switch(product){
                case 'coffee':
                    price = countProduct * 0.45;
                    break;
                case 'water':
                    price = countProduct * 0.7;
                    break;
                case 'beer':
                    price = countProduct * 1.1;
                    break;
                case 'sweets':
                    price = countProduct * 1.35;
                    break;
                case 'peanuts':
                    price = countProduct * 1.55;
                    break;
            }
            break;
    }

    console.log(price);


}

smallShop(["coffee",
"Varna",
"2"]);