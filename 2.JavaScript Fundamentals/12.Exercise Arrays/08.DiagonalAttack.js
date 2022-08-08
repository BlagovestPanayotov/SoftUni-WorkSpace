function diagonalAttack(input) {
    let output = [];
    for (let arr of input) {
        output.push(arr.split(' '));
    }
    let diagonal1 = 0;
    let diagonal2 = 0;
    let j = output[0].length - 1;
    for (let i = 0; i < output[0].length; i++) {
        diagonal1 += Number(output[i][i]);
        diagonal2 += Number(output[i][j--]);
    }


    if (diagonal1 === diagonal2) {
        let x = 0;
        let y = output[0].length - 1;
        for (let i = 0; i < output[0].length; i++) {
            for (let k = 0; k < output[0].length; k++) {
                if (k === x && i == x) {

                    continue;
                }
                if (i === x && k === y) {

                    continue;
                }
                output[i][k] = diagonal1;
            }
            x++;
            y--;
        }
        for (let arr of output) {
            console.log(arr.join(' '));
        }
    } else {
        for (let arr of output) {
            console.log(arr.join(' '));
        }
    }


}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
console.log('-----------');
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);
console.log('-----------');