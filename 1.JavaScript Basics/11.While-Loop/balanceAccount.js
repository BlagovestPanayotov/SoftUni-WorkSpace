function balanceAccount(input) {

    let index = 0;
    let totalSum = 0;
    let currentInput = input[index];

    while (currentInput !== 'NoMoreMoney') {
        let inputAsNum = Number(currentInput);

        if (inputAsNum < 0) {
            console.log('Invalid operation!');
            break;
        }
        totalSum += inputAsNum;
        console.log(`Increase: ${inputAsNum.toFixed(2)}`);
        index++;
        currentInput = input[index];
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);

}
balanceAccount(["120",
    "45.55",
    "-150"]);