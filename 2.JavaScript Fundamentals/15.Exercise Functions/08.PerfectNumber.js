function perfectNumber(num) {

    if (num === sumOFDividers(num)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

    function sumOFDividers(num) {
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        return sum;
    }

}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
