function charactersInRange(firstChar, secondChar) {

    printCharsInRange(findRangeBetwenChars(firstChar, secondChar));


    function printCharsInRange(range) {
        let output = [];

        for (let element = range[0]; element <= range[1]; element++) {
            output.push(String.fromCharCode(element));
        }
        console.log(output.join(' '));
    }

    function findRangeBetwenChars(charOne, charTwo) {
        let numOne = String(charOne).charCodeAt(0);
        let numTwo = String(charTwo).charCodeAt(0);

        if (numOne < numTwo) {
            return [numOne + 1, numTwo - 1];
        } else if (numTwo < numOne) {
            return [numTwo + 1, numOne - 1];
        } else {
            return [];
        }

    }

}
charactersInRange('C', '#');
