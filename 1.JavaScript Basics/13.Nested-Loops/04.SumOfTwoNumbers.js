function sumOfTwoNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);

    let counter = 0;
    let isFound = false;

    let finalNum1 = 0;
    let finalNum2 = 0;

    for (let i = num1; i <= num2; i++) {
        for (let k = num1; k <= num2; k++) {
            counter++;
            if ((i + k) === magicNum) {
                isFound = true;
                finalNum1 = i;
                finalNum2 = k;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (isFound) {
        console.log(`Combination N:${counter} (${finalNum1} + ${finalNum2} = ${magicNum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}
sumOfTwoNumbers(["1",
    "10",
    "5"]);