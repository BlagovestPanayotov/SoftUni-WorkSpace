function magicMatrices(input) {

    let sum = input[0].reduce((a, b) => a + b);
    for (let i = 0; i < input.length; i++) {
        if (sum !== input[i].reduce((a, b) => a + b)) {
            return false;
        }
        let sumCol = 0;
        for (let k = 0; k < input.length; k++) {
            sumCol+=input[k][i];
        }
        if(sumCol!==sum){
            return false;
        }
    }
    return true;
}
magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);