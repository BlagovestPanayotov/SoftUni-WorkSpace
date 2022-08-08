function spiralMatrix(x, y) {

    let output = [];

    for (let i = 0; i < y; i++) {
        output.push([]);
        for (let j = 0; j < x; j++) {
            output[i].push('');
        }
    }

    let repetition = Math.ceil(y / 2);
    let num = 1;
    for (let i = 0; i < repetition; i++) {
        let j = i;
        let k = i;
        while (k < x) {
            output[j][k++] = num++;
        }
        k--;
        j++;
        while (j < y) {
            output[j++][k] = num++;

        }
        j--;
        k--;
        while (k >= i) {
            output[j][k--] = num++;
        }
        k++;
        j--;
        while (j >= i + 1) {
            output[j--][k] = num++;
        }
        x--;
        y--
    }
    for (let i = 0; i < output.length; i++) {
        console.log(output[i].join(' '));
    }

}
spiralMatrix(5, 5);
console.log('-----------');
spiralMatrix(3, 3);
console.log('-----------');

