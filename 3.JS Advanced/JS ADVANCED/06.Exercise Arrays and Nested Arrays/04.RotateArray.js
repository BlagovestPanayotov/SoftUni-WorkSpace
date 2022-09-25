function rotateArray(arr, repetitions) {
    const neededRepetitions = repetitions % arr.length;
    for (let i = 0; i < neededRepetitions; i++) arr.unshift(arr.pop());
    return arr.join(' ');
}
console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));