function revealWords(changeWords, sentence) {
    let words = changeWords.split(", ");
    for (let word of words) {
        sentence = sentence.replace('*'.repeat(word.length), word);
    }
    console.log(sentence);
}