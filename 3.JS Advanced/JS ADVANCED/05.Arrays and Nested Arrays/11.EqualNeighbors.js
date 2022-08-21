function equalNeighbors(input) {

    let matches = 0;
    let imax = input.length;
    let jmax = input[0].length;

    for (let i = 0; i < imax; i++) {
        for (let j = 0; j < jmax; j++) {
            if (j < jmax - 1 && input[i][j] === input[i][j + 1]) {

                matches++;
            }

            if (i < input.length - 1 && input[i][j] === input[i + 1][j]) {
                matches++;
            }
        }
    }

    console.log(matches);
}
equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);