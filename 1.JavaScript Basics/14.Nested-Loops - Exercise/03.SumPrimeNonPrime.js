function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumPirimeNums = 0;
    let sumNonPrimeNums = 0;

    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            sumPirimeNums += 1;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPirimeNums += num;
        } else {
            sumNonPrimeNums += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPirimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);

}
sumPrimeNonPrime(["0",
    "-9",
    "0",
    "stop"])
    ;