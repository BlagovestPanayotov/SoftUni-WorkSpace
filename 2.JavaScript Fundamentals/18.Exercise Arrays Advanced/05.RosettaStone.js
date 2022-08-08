function rosettaStone(input) {

    let lines = Number(input.shift());
    let matrix = [];

    for (let i = 0; i < lines; i++) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    input = input.map(x => x.split(' ').map(Number));


    for (let x = 0; x < input.length; x += matrix.length) {
        for (let y = 0; y < input[0].length; y += matrix[0].length) {
            for (let xm = 0; xm < matrix.length; xm++) {
                for (let ym = 0; ym < matrix[0].length; ym++) {
                    if ((x + xm) < input.length && (y + ym) < input[0].length) {
                        input[x + xm][y + ym] += matrix[xm][ym];
                        input[x + xm][y + ym] = input[x + xm][y + ym] % 27;
                    }
                }
            }
        }
    }


    let result = [];
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[0].length; y++) {
            let letter = String.fromCharCode(input[x][y] + 64);
            if (input[x][y] === 0) {
                letter = ' ';
            }
            result.push(letter);
        }
    }

    console.log(result.join(''));

}




rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'])