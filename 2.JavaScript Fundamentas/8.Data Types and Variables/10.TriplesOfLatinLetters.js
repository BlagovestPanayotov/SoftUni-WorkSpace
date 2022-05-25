function triplesOfLatinLetters(num) {
    let firstLetter = '';
    let secondLetter = '';
    let thirtLetter = '';

    for (let i = 0; i < num; i++) {
        firstLetter = String.fromCharCode(i + 97);
        for (let j = 0; j < num; j++) {
            secondLetter = String.fromCharCode(j + 97);
            for (let k = 0; k < num; k++) {
                thirtLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirtLetter}`);

            }
        }
    }
}

triplesOfLatinLetters(3);