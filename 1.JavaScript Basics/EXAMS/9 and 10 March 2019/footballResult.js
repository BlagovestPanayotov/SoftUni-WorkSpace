function footballResult(input) {

    let wonGame = 0;
    let lostGames = 0;
    let drawGames = 0;

    for (let index = 0; index < 3; index++) {
        const game = input[index];

        let scoreHosts = Number(game[0]);
        let scoreGuests = Number(game[2]);

        if (scoreHosts > scoreGuests) {
            wonGame++;
        } else if (scoreGuests > scoreHosts) {
            lostGames++;
        } else {
            drawGames++;
        }
    }

    console.log(`Team won ${wonGame} games.`);
    console.log(`Team lost ${lostGames} games.`);
    console.log(`Drawn games: ${drawGames}`);



}

footballResult(["0:2",
"0:1",
"3:3"]);