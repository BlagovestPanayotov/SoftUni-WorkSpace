function diagonalAttack(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    const field = input.slice().map(x => x.split(' ').map(Number));
    for (let i = 0; i < field.length; i++) {
        mainDiagonal += field[i][i];
        secondaryDiagonal += field[field.length - 1 - i][i];
    }
    if (mainDiagonal == secondaryDiagonal) {
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field.length; j++) {
                if (i !== j &&
                    i !== field.length - 1 - j) {
                    field[i][j] = mainDiagonal;
                }
            }
        }
    }
    field.forEach(x => console.log(x.join(' ')));
}
diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);
diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0'])