function asciiSumator(input) {

    let str = input[2];
    let borders = [input[0].charCodeAt(0), input[1].charCodeAt(0)];
    borders.sort((a, b) => a - b);

    let sum = 0;

    for (let char of str) {
        let value = char.charCodeAt(0);
        if (value > borders[0] && value < borders[1]) {
            sum += value;
        }
    }

    console.log(sum);

}


asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
console.log('-'.repeat(16));
asciiSumator(['?',
    'E',
    '@ABCEF']);
console.log('-'.repeat(16));
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);