function sortingNumbers(input) {
    const output = [];
    const sortedInput = input.sort((a, b) => a - b);
    const neededRepetitions = input.length / 2;
    for (let i = 0; i < neededRepetitions; i++) {
        output.push(sortedInput.shift());
        if (sortedInput.length > 0) {
            output.push(sortedInput.pop());
        }
    }
    return output;
}
sortingNumbers([1, 65, 3, 52, 48, 11, 63, 31, -3, 18, 56]);