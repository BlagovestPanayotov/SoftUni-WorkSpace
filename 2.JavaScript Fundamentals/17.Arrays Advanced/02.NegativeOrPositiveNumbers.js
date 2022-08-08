function negativeOrPositiveNumbers(input) {
    let result = [];

    for (let num of input) {
        let currentNum = Number(num);
        if (currentNum < 0) {
            result.unshift(currentNum);
        } else {
            result.push(currentNum);
        }
    }

    for (let num of result) {
        console.log(num);
    }

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);
