function printEveryNthElementFromArray(arr, step) {
    return arr.filter((x, i) => i % step === 0);
}
console.log(printEveryNthElementFromArray(['dsa',
    'asd',
    'test',
    'tset'],
    2
));