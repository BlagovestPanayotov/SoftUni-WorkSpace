function sumOfNumbersNM(numOne, numTwo) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);

    let result = 0;
    
    
        for (let i = numOne; i <= numTwo; i++) {
            result += i;
        }
    
    return result;

}
console.log(sumOfNumbersNM('5', '1'))
sumOfNumbersNM('-8', '20');