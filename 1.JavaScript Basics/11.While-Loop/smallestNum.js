function smallestNum(input) {
    let smallestNum = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let currentInput = input[index];
    index++;
    while (currentInput !== 'Stop') {
        currentInput = Number(currentInput);
        if (smallestNum > currentInput) {
            smallestNum = currentInput;
        }
        currentInput = input[index];
        index++;
    }
    console.log(smallestNum);

}
smallestNum(["100",
"99",
"80",
"70",
"Stop"])