function lastKNumbersSequance(len, k) {
    let output = [1];

    for (let i = 1; i < len; i++) {
        let sum = 0;
        let currentNums = output.slice(k * -1);
        for (let num of currentNums) {
            sum += num;
        }
        output.push(sum);
    }
    console.log(output.join(' '));

}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);
