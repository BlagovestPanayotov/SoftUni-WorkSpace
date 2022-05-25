function sumOfNums(input) {
    let target = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < target) {
        let currentNum = Number(input[index]);
        index++;
        sum += currentNum;
    }
    console.log(sum);

}
sumOfNums(["20", "1", "2", "3", "4", "5", "6"]);