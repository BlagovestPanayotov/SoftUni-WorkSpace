function magicMatrices(input) {
    let isMagical = true;
    const sum = input[0].slice().reduce((a, b) => a + b);
    for (let i = 0; i < input.length; i++) {
        let currentSumRow = input[i].slice().reduce((a, b) => a + b);
        if (sum !== currentSumRow) {
            isMagical = false;
            break;
        }
        let currentSumCol = 0;
        for (let j = 0; j < input.length; j++) {
            currentSumCol+=input[j][i];
        }
        if (sum !== currentSumCol) {
            isMagical = false;
            break;
        }
    }
    return isMagical;
}
console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));