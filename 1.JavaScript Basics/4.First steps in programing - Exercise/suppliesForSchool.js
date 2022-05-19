function suppliesForSchool(input){

    let penCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let detergentLitters = Number(input[2]);
    let discountPercent = Number(input[3]);

    let totalPrice = penCount * 5.80 + markerCount * 7.20 + detergentLitters * 1.20;
    let discountAmount = totalPrice * discountPercent / 100;

    let finalPrice = totalPrice - discountAmount;

    console.log(finalPrice);

}

suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
);