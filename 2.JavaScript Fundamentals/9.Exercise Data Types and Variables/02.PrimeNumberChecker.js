function primeNumberChecker(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }


    console.log(isPrime ? true : false);


}
primeNumberChecker(1000000000);
primeNumberChecker(8);
primeNumberChecker(81);
