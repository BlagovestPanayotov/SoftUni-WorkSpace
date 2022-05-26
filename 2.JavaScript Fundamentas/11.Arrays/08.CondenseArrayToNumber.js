function condenseArrayToNumber(input) {

    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }


    while (input.length > 1) {
        let newArr = [];
        for (let i = 0; i < input.length - 1; i++) {
            newArr[i] = input[i] + input[i + 1];
        }
        input = newArr;
    }
    console.log(input[0]);
    
}
condenseArrayToNumber([2,10,3]);
