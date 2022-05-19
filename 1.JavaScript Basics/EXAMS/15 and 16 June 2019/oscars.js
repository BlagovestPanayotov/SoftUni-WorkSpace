function oscars(input) {

    let nameActor = input[0];
    let points = Number(input[1]);
    let countJudges = Number(input[2]);

    let index = 3;

    for (let i = 0; i < countJudges; i++) {
        let nameJudgde = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;

        points += nameJudgde.length * currentPoints / 2;
        if(points>1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    if(points<=1250.5){
        console.log(`Sorry, ${nameActor} you need ${(1250.5-points).toFixed(1)} more!`);
    }

}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);