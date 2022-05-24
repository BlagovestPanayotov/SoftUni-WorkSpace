function rightPlace(str1, charachter, str2) {
    let firstWord = str1;
    let secondWord = str2;
    let compareChar = charachter;
    firstWord = firstWord.replace('_', compareChar);
    if (firstWord === secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong')