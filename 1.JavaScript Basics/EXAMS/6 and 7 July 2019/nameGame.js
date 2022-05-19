function nameGame(input) {
    let index = 0;
    let bestScore = Number.MIN_SAFE_INTEGER;
    let bestPlayer = '';

    while (true) {
        let name = input[index];
        index++;
        if (name === 'Stop') {
            break;
        }
        let currentScore = 0;
        for (let i = 0; i < name.length; i++) {
            let letter = name.charCodeAt(i);
            let guess = Number(input[index]);
            index++;
            if (letter === guess) {
                currentScore += 10;
            } else {
                currentScore += 2;
            }
        }
        if (currentScore >= bestScore) {
            bestScore = currentScore;
            bestPlayer = name;
        }
    }
    console.log(`The winner is ${bestPlayer} with ${bestScore} points!`);


}
nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"]);