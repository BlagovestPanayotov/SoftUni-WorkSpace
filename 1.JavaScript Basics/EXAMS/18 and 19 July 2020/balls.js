function balls(input) {

    let countBalls = Number(input[0]);
    let points = 0;

    let countRed = 0;
    let countOrange = 0;
    let countYellow = 0;
    let countWhite = 0;
    let countBalck = 0;
    let countOther = 0;

    for (let index = 1; index <= countBalls; index++) {
        const currentBall = input[index];

        switch (currentBall) {
            case 'red':
                points+=5;
                countRed++;
                break;
            case 'orange':
                points+=10;
                countOrange++;
                break;
            case 'yellow':
                points+=15;
                countYellow++;
                break;
            case 'white':
                points+=20;
                countWhite++;
                break;
            case 'black':
                points*=0.5;
                points = Math.floor(points);
                countBalck++;
                break;
            default:
                countOther++;
                break;
        }

    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${countRed}`);
    console.log(`Orange balls: ${countOrange}`);
    console.log(`Yellow balls: ${countYellow}`);
    console.log(`White balls: ${countWhite}`);
    console.log(`Other colors picked: ${countOther}`);
    console.log(`Divides from black balls: ${countBalck}`);

}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);