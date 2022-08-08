function calculator(firstNum, operator, seconNum) {
    let result = 0;
    switch (operator) {
        case '+':
            result = firstNum + seconNum;
            break;
        case '-':
            result = firstNum - seconNum;
            break;
        case '*':
            result = firstNum * seconNum;
            break;
        case '/':
            result = firstNum / seconNum;
            break;
    }
    console.log(result.toFixed(2));
}
calculator(5,
    '/',
    0);
