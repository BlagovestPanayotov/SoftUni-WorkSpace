function greatestCommonDivisor(numOne, numTwo) {

    let firstNum = numOne;
    let secondNum = numTwo;
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);

}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
greatestCommonDivisor(16, 48);