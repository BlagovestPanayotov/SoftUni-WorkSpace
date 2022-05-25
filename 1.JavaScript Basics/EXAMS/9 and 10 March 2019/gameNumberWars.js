function gameNumberWars(input) {
    let namePlayerOne = input[0];
    let namePlayerTwo = input[1];

    let pointsOne = 0;
    let pointsTwo = 0;

    let index = 2;

    while (input[index] !== 'End of game') {
        let currentDrawOne = Number(input[index]);
        let currentDrawTwo = Number(input[index + 1]);
        let diff = currentDrawOne-currentDrawTwo;
        if (diff>0) {
            pointsOne+=diff;
        } else if (diff<0) {
            pointsTwo+=Math.abs(diff);
        } else {
            console.log(`Number wars!`);
            if (Number(input[index + 2]) > Number(input[index + 3])) {
                console.log(`${namePlayerOne} is winner with ${pointsOne} points`);
            } else {
                console.log(`${namePlayerTwo} is winner with ${pointsTwo} points`);
            }
            return;
        }
        index += 2;
    }
    console.log(`${namePlayerOne} has ${pointsOne} points`);
    console.log(`${namePlayerTwo} has ${pointsTwo} points`);


}
gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"]);