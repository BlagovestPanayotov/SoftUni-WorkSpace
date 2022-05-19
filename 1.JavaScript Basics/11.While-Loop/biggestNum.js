function biggestNum(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let currentInput = input[index];
    index++;
    while (currentInput !== 'Stop') {
        currentInput = Number(currentInput);
        if (biggestNum < currentInput) {
            biggestNum = currentInput;
        }
        currentInput = input[index];
        index++;
    }
    console.log(biggestNum);

}
biggestNum(["-1",
"-2",
"Stop"]);