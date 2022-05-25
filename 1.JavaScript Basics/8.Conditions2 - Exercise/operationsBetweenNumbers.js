function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let isOdd = true;
    let isZero = false;

    if (operator !== '/' && operator !== '%') {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        if (result % 2 === 0) {
            isOdd = false;
        }
    } else if (operator !== '/' || operator !== '%') {
        if (num2 === 0) {
            isZero = true;
        } else {
            switch (operator) {
                case '/':
                    result = num1 / num2;
                    break;
                case '%':
                    result = num1 % num2;
                    break;
            }
        }
    }

    if (isZero) {
        console.log(`Cannot divide ${num1} by zero`);
    } else if (operator === '/') {
        console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    } else if (operator === '%') {
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    } else {
        if (isOdd) {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`);
        }
    }

}
operationsBetweenNumbers(["10",
    "0",
    "%"]);