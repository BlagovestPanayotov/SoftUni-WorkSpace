function signCheck(numOne, numTwo, numThree) {

    let negatives = countNegativeNums(numOne, numTwo, numThree);

    if (negatives % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

    function countNegativeNums(numOne, numTwo, numThree) {
        let negatives = 0;
        if (numOne < 0) {
            negatives++;
        }
        if (numTwo < 0) {
            negatives++;
        }
        if (numThree < 0) {
            negatives++;
        }
        return negatives;
    }

}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);