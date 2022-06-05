function factorialDivision(numOne, numTwo) {

    printResult(calculateFactorial(numOne), calculateFactorial(numTwo));

    function printResult(numOne, numTwo) {
        let result = numOne / numTwo;
        console.log(result.toFixed(2));
    }

    function calculateFactorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

}
factorialDivision(5, 2);
factorialDivision(6, 2);