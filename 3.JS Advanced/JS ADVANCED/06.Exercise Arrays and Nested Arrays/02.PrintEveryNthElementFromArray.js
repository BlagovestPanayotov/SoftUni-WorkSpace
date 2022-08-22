let printEveryNthElementFromArray = ((arr, num) => arr.filter((_, i) => i % num === 0));

console.log(printEveryNthElementFromArray(
    ['5',
        '20',
        '31',
        '4',
        '20'], 2));
console.log(printEveryNthElementFromArray(
    ['dsa',
        'asd',
        'test',
        'tset'], 2
));
console.log(printEveryNthElementFromArray(
    ['1',
        '2',
        '3',
        '4',
        '5'], 6))
