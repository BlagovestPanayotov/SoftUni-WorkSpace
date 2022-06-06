function pointsValidation(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let isValidDistancePointOne = distanceCheckIsValid(x1, y1, 0, 0);
    let isValidDistancePointTwo = distanceCheckIsValid(x2, y2, 0, 0);
    let isValidDistanceBetwenPoints = distanceCheckIsValid(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(isValidDistancePointOne)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(isValidDistancePointTwo)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(isValidDistanceBetwenPoints)}`);

    function distanceCheckIsValid(x1, y1, x2, y2) {

        let distance = Math.sqrt(Math.pow((x2 - x1), 2)
            + Math.pow((y2 - y1), 2));

        if (distance % 1 === 0) {
            return true;
        } else {
            return false;
        }

    }

    function isValid(isValidDistance) {
        if (isValidDistance) {
            return 'valid';
        } else {
            return 'invalid';
        }
    }

}
pointsValidation([3, 0, 0, 4]);
console.log('---------');
pointsValidation([2, 1, 1, 1]);