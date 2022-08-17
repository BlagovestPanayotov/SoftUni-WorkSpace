function mathOperations(numOne, numTwo, str) {

    let result;

    switch (str) {
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            result = numOne / numTwo;
            break;
        case '**':
            result = numOne ** numTwo;
            break;
        case '%':
            result = numOne % numTwo;
            break;
    }

    console.log(result);

}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');