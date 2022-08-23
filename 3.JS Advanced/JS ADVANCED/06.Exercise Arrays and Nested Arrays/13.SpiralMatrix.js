function spiralMatrix(x, y) {

    let matrix = [];
    for (let i = 0; i < x; i++) {
        matrix.push([]);
        for (let j = 0; j < y; j++) {
            matrix[i][j] = 0;
        }
    }

    let num = 1;

    let i = 0;
    let j = 0;
    let boardX = [0, x];
    let boardY = [0, y];
    while (matrix[i][j] === 0) {
        for (i; i < boardX[1]-1; i++) {
            matrix[j][i] = num++;
        }
        for (j; j < boardY[1]; j++) {
            matrix[j][i] = num++;
        }
        i -= 1;
        j -= 1;
        for (i; i > boardX[0]; i--) {
            matrix[j][i] = num++;

        }
        for (j; j > boardY[0]; j--) {
            matrix[j][i] = num++;
        }
        i += 1;
        j += 1;
        boardX[0]++;
        boardX[1]--;
        boardY[0]++;
        boardY[1]--;
    }
    
    for(let row of matrix){
        console.log(row.join(' '));
    }
}
spiralMatrix(5, 5);
// spiralMatrix(3,3);
// spiralMatrix(1,5);