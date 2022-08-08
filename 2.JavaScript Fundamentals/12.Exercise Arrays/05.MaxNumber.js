function maxNumber(input) {
    let output = '';

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        let isBigger = true;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] >= num) {
                isBigger = false;
                break;
            }
        }
        if (isBigger && i < input.length - 1) {
            output += num + ' ';
        } else if (isBigger) {
            output += num;
        }
    }
    console.log(output);

}
maxNumber([1, 4, 3, 2]);
console.log('--------');
maxNumber([14, 24, 3, 19, 15, 17]);
console.log('--------');
maxNumber([41, 41, 34, 20]);
