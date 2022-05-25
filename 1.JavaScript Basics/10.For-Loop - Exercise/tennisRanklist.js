function tennisRanklist(input) {

    let countTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let index = 2;
    let wonPoints = 0;
    let countWins = 0;

    for (let i = 0; i < countTournaments; i++) {
        let currentTournament = input[index];
        index++;
        switch (currentTournament) {
            case 'W':
                countWins++;
                wonPoints+=2000;
                break;
            case 'F':
                wonPoints+=1200;
                break;
            case 'SF':
                wonPoints+=720
                break;
        }
    }

    console.log(`Final points: ${wonPoints+startingPoints}`);
    console.log(`Average points: ${Math.floor(wonPoints/countTournaments)}`);
    console.log(`${(countWins/countTournaments*100).toFixed(2)}%`);


}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);