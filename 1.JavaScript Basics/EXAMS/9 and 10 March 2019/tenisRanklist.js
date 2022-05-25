function tenisRanklist(input){
    let countGames = Number(input[0]);
    let startingPoints = Number(input[1]);
    let countWins = 0;
    let points = 0;
    
    for(let i = 0; i<countGames; i++){
        switch(input[2+i]){
            case 'W':
                points+=2000;
                countWins++;
                break;
            case 'F':
                points+=1200;
                break;
            case 'SF':
                points+=720;
                break;
        }
    }

    let averagePointsPG = Math.floor(points/countGames);
    let totalPoints = points+startingPoints;
    let percentWins = (countWins/countGames)*100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePointsPG}`);
    console.log(`${percentWins.toFixed(2)}%`);

}
tenisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);