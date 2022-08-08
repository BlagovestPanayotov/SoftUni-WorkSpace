function replaceRepeatingChars(input) {

    let result = input[0];
    for (let char of input) {
        if (char != result[result.length - 1]) {
            result += char;
        }
    }

    console.log(result);

}