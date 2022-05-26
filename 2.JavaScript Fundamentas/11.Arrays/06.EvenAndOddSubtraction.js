function evenAndOddSubtraction(input) {

    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    let sumEven = 0;
    let sumOdd = 0;
    for (let num of input) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd);

}
evenAndOddSubtraction([1,2,3,4,5,6]);