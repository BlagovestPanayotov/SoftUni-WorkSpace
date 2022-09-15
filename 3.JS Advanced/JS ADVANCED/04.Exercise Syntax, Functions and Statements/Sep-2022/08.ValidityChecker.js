function validityChecker(x1, y1, x2, y2) {

    console.log(`{${x1}, ${y1}} to {0, 0} is ${validator(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validator(0, 0, x2, y2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validator(x1, y1, x2, y2)}`);

    function validator(x1, y1, x2, y2) {
        const result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        if (result % 1 > 0) {
            return 'invalid'
        }
        return 'valid'
    }

}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);