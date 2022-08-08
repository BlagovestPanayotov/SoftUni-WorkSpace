function stringSubstring(wantedWord, sentence) {
    let sentenceAsArr = sentence.split(" ").map(x => x.toLowerCase());
    for (let word of sentenceAsArr) {
        if (word == wantedWord) {
            return word;
        }
    }
    console.log(`${wantedWord} not found!`);
}