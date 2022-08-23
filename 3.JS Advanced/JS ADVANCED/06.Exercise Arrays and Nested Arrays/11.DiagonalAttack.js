function diagonalAttack(input) {

    let matrix = [];

    input.forEach(x => {
        matrix.push(x.split(' ').map(Number));
    });

    let diagonalOne = 0;
    let diagonalTwo = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalOne += matrix[i][i];
        diagonalTwo += matrix[i][matrix.length - 1 - i];
    }

    if (diagonalOne === diagonalTwo) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (j !== i && j !== matrix.length - 1 - i) {
                    matrix[i][j] = diagonalOne;
                }
            }
        }

    }

    matrix.forEach(x => {
        console.log(x.join(' '));
    })

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
        '1 1 0']);