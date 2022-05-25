function trapeziodArea(input){

    let baseA = Number(input[0]);
    let baseB = Number(input[1]);
    let hight = Number(input[2]);

    let area = (baseA + baseB) * hight/2;

    console.log(area.toFixed(2));

}

trapeziodArea(['8',
    '13',
    '7'])