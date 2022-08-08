function jansNotation(input) {

    let result = [];
    let hasError = false;

    for (let element of input) {
        if (typeof element === 'number') {
            result.push(element);
        } else {
            if (result.length >= 2) {
                let nums = result.splice(-2);
                switch (element) {
                    case '+':
                        result.push(nums[0] + nums[1]);
                        break;
                    case '-':
                        result.push(nums[0] - nums[1]);
                        break;
                    case '*':
                        result.push(nums[0] * nums[1]);
                        break;
                    case '/':
                        result.push(nums[0] / nums[1]);
                        break;
                }
            } else {
                console.log('Error: not enough operands!');
                hasError = true;
                break;
            }
        }
    }

    if (!hasError) {
        if (result.length == 1) {
            console.log(result[0]);
        } else {
            console.log('Error: too many operands!');
        }
    }


}

jansNotation([3,
    4,
    '+']);

jansNotation([5,
    3,
    4,
    '*',
    '-']);

jansNotation([7,
    33,
    8,
    '-']);

jansNotation([15,
    '/']);
