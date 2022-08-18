function validityChecker(x1, y1, x2, y2) {
    let isValid;

    let testOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    if (testOne % 1 !== 0) {
        isValid = false
    } else {
        isValid = true
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid ? 'valid' : 'invalid'}`);

    let testTwo = Math.sqrt(Math.pow(x2 , 2) + Math.pow(y2, 2));;
    if (testTwo % 1 !== 0) {
        isValid = false
    } else {
        isValid = true
    }
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid ? 'valid' : 'invalid'}`);

    let testThree = Math.sqrt(Math.pow((x1 > x2 ? x1 - x2 : x2 - x1), 2)
        + Math.pow((y1 > y2 ? y1 - y2 : y2 - y1), 2));
    if (testThree % 1 !== 0) {
        isValid = false
    } else {
        isValid = true
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? 'valid' : 'invalid'}`);

}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);