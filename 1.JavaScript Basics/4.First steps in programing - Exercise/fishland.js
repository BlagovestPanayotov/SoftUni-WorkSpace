function fishland(input){

    let mackerelPrice = Number(input[0]); //скумпия
    let spratPrice = Number(input[1]);  //цаца
    let bonitoQuantity = Number(input[2]);  //паламуд
    let horseMackrelQuantity = Number(input[3]);    //сафрид
    let musslesQuantity = Number(input[4]);     //миди

    let bonitoPrice = mackerelPrice * 1.6;
    let horseMackrelPrice = spratPrice * 1.8;
    let musslesPrice = 7.5;

    let totalPrice = bonitoPrice*bonitoQuantity + horseMackrelPrice*horseMackrelQuantity + musslesPrice*musslesQuantity;

    console.log(totalPrice.toFixed(2));

}

fishland([5.55,
    3.57,
    4.3,
    3.6,
    7])