function sumOfOddNums(num) {
    let sum = 0;
    let odd = 1;
    for (let i = 1; i <= num; i += 1) {
        console.log(odd);
        sum += odd;
        odd += 2;
    }
    console.log('Sum: ' + sum);
}
sumOfOddNums(5);
sumOfOddNums(3);