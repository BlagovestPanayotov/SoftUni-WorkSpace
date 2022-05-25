function footballTurnament(input) {
    let name = input[0];
    let playedGames = Number(input[1]);
    let countW = 0;
    let countL = 0;
    let countD = 0;

    if (playedGames <= 0) {
        console.log(`${name} hasn't played any games during this season.`);
    } else {
        for (let index = 2; index < playedGames + 2; index++) {
            const game = input[index];

            switch (game) {
                case 'W':
                    countW++;
                    break;
                case 'L':
                    countL++;
                    break;
                case 'D':
                    countD++;
                    break;
            }
        }

        console.log(`${name} has won ${countW * 3 + countD} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${((countW / playedGames) * 100).toFixed(2)}%`);
    }
}
footballTurnament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"]);