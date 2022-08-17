function sameNumbers(input) {

    let numAsString = input.toString();
    let sum = 0
    let isSame = true;
    let compareDigit = Number(numAsString[0]);

    for (let num of numAsString) {
        num = Number(num);
        if (compareDigit !== num) {
            isSame = false;
        }
        sum += num;
    }
    console.log(isSame);
    console.log(sum);

}
sameNumbers(2222222);
sameNumbers(1234);