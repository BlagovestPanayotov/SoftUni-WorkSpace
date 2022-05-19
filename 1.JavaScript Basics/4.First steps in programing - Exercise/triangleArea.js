function triangleArea(input){

    let base = Number(input[0]);
    let hignt = Number(input[1]);

    let area = base*hignt/2;

    console.log(area.toFixed(2));

}

triangleArea([1.23456,
    4.56789])