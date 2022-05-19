function basketballTournament(input) {

    let index = 0;
    let tournamentName = '';
    let countWins = 0;
    let countLost = 0;
    let countGames = 0;
    let totalGames = 0;

    while (input[index] !== 'End of tournaments') {
        tournamentName = input[index++];
        let games = Number(input[index++]);
        countGames = 0;
        for (let i = 0; i < games; i++) {
            let pointsHosts = Number(input[index++]);
            let pointsGuests = Number(input[index++]);
            let diff = pointsHosts - pointsGuests;
            countGames++;
            if (diff > 0) {
                console.log(`Game ${countGames} of tournament ${tournamentName}: win with ${diff} points.`);
                countWins++;
            } else {
                console.log(`Game ${countGames} of tournament ${tournamentName}: lost with ${Math.abs(diff)} points.`);
                countLost++;
            }

        }
        totalGames += countGames;
    }

    let percentWins = (countWins / totalGames) * 100;
    let percentLost = (countLost / totalGames) * 100;

    console.log(`${percentWins.toFixed(2)}% matches win`);
    console.log(`${percentLost.toFixed(2)}% matches lost`);

}

basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"]);