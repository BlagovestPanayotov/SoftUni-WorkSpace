function transportPrice(input){

    let distance = Number(input[0]);
    let dalyTime = input[1];

    let price = 0;
    let tax = 0;

    if(distance >= 100){
        price = 0.06;
    }else if(distance >= 20){
        price = 0.09;
    }else{
        tax = 0.7;
        if(dalyTime === 'day'){
            price = 0.79;
        }else{
            price = 0.90;
        }
    }

    let finalPrice = tax + price*distance;
    console.log(finalPrice.toFixed(2));

}

transportPrice(['180','night']);