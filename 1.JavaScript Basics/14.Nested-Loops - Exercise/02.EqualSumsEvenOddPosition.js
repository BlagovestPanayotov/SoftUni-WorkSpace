function equalSumsEvenOddPosition(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let output = '';

    for (let i = num1; i <= num2; i++) {
        let numInChars = i.toString().split('');
        let sumEven = 0;
        let sumOdd = 0;
        for (let j = 1; j <= 6; j++) {
            if (j % 2 === 0) {
                sumEven += Number(numInChars[j - 1]);
            } else {
                sumOdd += Number(numInChars[j - 1]);
            }
        }
        if (sumEven === sumOdd) {
            output+= i + ' ';
        }
    }
    console.log(output);
}
equalSumsEvenOddPosition(["299900",
"300000"]);