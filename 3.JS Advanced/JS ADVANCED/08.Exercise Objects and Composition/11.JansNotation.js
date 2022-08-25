function jansNotation(input) {

    let num = [];
    let ops = {
        '+'(numOne, numTwo) {
            return numOne + numTwo;
        },
        '-'(numOne, numTwo) {
            return numOne - numTwo;
        },
        '*'(numOne, numTwo) {
            return numOne * numTwo;
        },
        '/'(numOne, numTwo) {
            return numOne / numTwo;
        },
    };

    for (let el of input) {

        if (typeof el === 'number') {
            num.push(el);
        } else {
            if (num.length < 2) {
                return 'Error: not enough operands!';
                
            } else {
                let numTwo = num.pop();
                let numOne = num.pop();
                num.push(ops[el](numOne, numTwo));
            }
        }

    }

    if (num.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(num[0]);
    }


}
// jansNotation([3, 4, '+']);
// jansNotation([5, 3, 4, '*', '-']);
// jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);