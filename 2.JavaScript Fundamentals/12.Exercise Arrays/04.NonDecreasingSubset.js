function nonDecreasingSubset(input) {

    let biggestNum = input[0];

    let output = input.filter(function (value) {
        if (value >= biggestNum) {
            biggestNum = value;
            return biggestNum;
        }
    });

    console.log(output.join(' '));


}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('------------');
nonDecreasingSubset([1, 2, 3, 4]);
console.log('------------');
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
console.log('------------');