function equalNeighbors(input) {
    let counter = 0;
    let elementA;
    let elementB;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (j + 1 < input[i].length) {
                if (input[i][j] === input[i][j + 1]) {
                    elementA = input[i][j];
                    elementB = input[i][j + 1];
                    counter++;
                }
            }
            if (i + 1 < input.length) {
                if (input[i][j] === input[i + 1][j]) {
                    elementA = input[i][j];
                    elementB = input[i + 1][j];
                    counter++;
                }
            }
        }
    }
    console.log(counter);

}



equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]);
