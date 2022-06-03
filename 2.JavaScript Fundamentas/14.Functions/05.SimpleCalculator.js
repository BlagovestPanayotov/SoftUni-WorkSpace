function simpleCalculator(numOne, numTwo, operator) {

    let multiply = (numOne, numTwo) => numOne * numTwo;

    let divide = (numOne, numTwo) => numOne / numTwo;

    let add = (numOne, numTwo) => numOne + numTwo;

    let subtract = (numOne, numTwo) => numOne - numTwo;


    let printResult = (numOne, numTwo, operator) => {
        switch (operator) {
            case 'multiply':
                return multiply(numOne, numTwo);
            case 'divide':
                return divide(numOne, numTwo);
            case 'add':
                return add(numOne, numTwo);
            case 'subtract':
                return subtract(numOne, numTwo);
        }
    }

    console.log(printResult(numOne, numTwo, operator));
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');