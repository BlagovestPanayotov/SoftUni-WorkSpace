function maxSequenceOfEqualElements(input) {
    let output = '';
    let currentOutput = '';
    for (let i = 0; i < input.length - 1; i++) {
        currentOutput += input[i];
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                currentOutput += ' ' + input[i];
            } else {
                i = j - 1;
                break;
            }
        }
        if (currentOutput.length > output.length) {
            output = currentOutput;
        }
        currentOutput = '';
    }
    console.log(output);

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('---------');
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('---------');
maxSequenceOfEqualElements([4, 4, 4, 4]);
console.log('---------');
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);