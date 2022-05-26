function sumEvenNumbers(input) {

    let sum = 0;

    for (let numString of input) {
        let num = Number(numString);
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);
