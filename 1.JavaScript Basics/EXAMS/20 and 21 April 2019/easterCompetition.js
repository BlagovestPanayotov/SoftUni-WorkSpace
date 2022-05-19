function easterCompetition(input) {

    let countEasterBread = Number(input[0]);
    let bestScore = Number.MIN_SAFE_INTEGER;
    let bestChef = '';
    let index = 1;

    for (let i = 0; i < countEasterBread; i++) {
        let currentScore = 0;
        let currentChef = input[index++];
        while (input[index] !== 'Stop') {
            currentScore += Number(input[index]);
            index++;
        }
        console.log(`${currentChef} has ${currentScore} points.`);
        if (bestScore < currentScore) {
            bestScore = currentScore;
            bestChef = currentChef;
            console.log(`${currentChef} is the new number 1!`);
        }
        index++;
    }

    console.log(`${bestChef} won competition with ${bestScore} points!`);



}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"]);