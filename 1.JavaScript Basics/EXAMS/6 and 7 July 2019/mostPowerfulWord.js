function mostPowerfulWord(input) {
    let index = 0;
    let bestScore = Number.MIN_SAFE_INTEGER;
    let bestWord = '';

    while (true) {
        let word = input[index];
        index++;
        if (word === 'End of words') {
            break;
        }
        let currentScore = 0;
        for (let i = 0; i < word.length; i++) {
            let pointChar = word.charCodeAt(i);
            currentScore += pointChar;
        }
        let wordLower = word.toLowerCase();
        switch (wordLower[0]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                currentScore *= word.length;
                break;
            default:
                currentScore /= word.length;
                currentScore = Math.floor(currentScore);
                break;
        }
        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestWord = word;
        }
    }

    console.log(`The most powerful word is ${bestWord} - ${bestScore}`);

}
mostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);