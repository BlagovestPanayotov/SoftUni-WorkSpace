function sorting(input) {
    let increacedNums = input.map(x => x).sort((a, b) => a - b);
    let decreacedNums = input.map(x => x).sort((a, b) => b - a);
    let output = [];
    let lastNum = 0;

    if (input.length % 2 !== 0) {
        lastNum = (input.length / 2) + 1;
    } else {
        lastNum = input.length / 2;
    }

    for (let i = 0; i < lastNum; i++) {
        output.push(decreacedNums[i]);
        if ((i > lastNum - 2) && (input.length % 2 !== 0)) {
            break;
        }
        output.push(increacedNums[i]);
    }

    console.log(output.join(' '));


}






sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 5]);
console.log('94 1 69 2 63 3 52 5 31 18 21');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
console.log('690 2 47 6 45 7 34 19 32 32');
