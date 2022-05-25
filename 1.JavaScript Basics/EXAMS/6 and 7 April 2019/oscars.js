function oscars(input) {
    let rent = Number(input[0]);
    let throphyPrice = rent * 0.7;
    let ceturing = throphyPrice * 0.85;
    let sound = ceturing * 0.5;

    let finalPrice = rent+throphyPrice+ceturing+sound;

    console.log(finalPrice.toFixed(2));

}
oscars(["3500"]);