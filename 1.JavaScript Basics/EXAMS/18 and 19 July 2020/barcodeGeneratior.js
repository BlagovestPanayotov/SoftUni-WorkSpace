function bargodeGeneratior(input) {

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let result = '';

    for (let i = numberOne; i <= numberTwo; i++) {
        let currentNumber = i.toString();
        let currentNumberOne = numberOne.toString();
        let currentNumberTwo = numberTwo.toString();
        let hasEvenN = false;
        let wrongNumber = false;

        let size = currentNumber.length;

        for (let k = 0; k < size; k++) {
            let singleNumberCurrent = Number(currentNumber[k]);
            let singleNumberOne = Number(currentNumberOne[k]);
            let singleNumberTwo = Number(currentNumberTwo[k]);
            if (singleNumberCurrent % 2 === 0) {
                hasEvenN = true;
                break;
            }
            if (singleNumberCurrent < singleNumberOne || singleNumberCurrent > singleNumberTwo) {
                wrongNumber = true;
                break;
            }
        }

        if (!hasEvenN && !wrongNumber) {
            result += currentNumber + ' ';
        }

    }

    console.log(result);

}

bargodeGeneratior(['2345',
    '6789'])