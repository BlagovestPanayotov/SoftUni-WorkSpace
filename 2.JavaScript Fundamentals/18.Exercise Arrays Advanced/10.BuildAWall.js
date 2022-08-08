function buildAWall(wall) {
    let wallHights = wall.map(Number);

    let concretePrice = 1900;
    let dailyConcreteForDayPMile = 195;
    let totalCount = 0;
    let dailyCount = 0;
    let finishedMiles = 0;
    let output = [];

    while (finishedMiles < wallHights.length) {
        finishedMiles = 0;
        for (let i = 0; i < wallHights.length; i++) {
            let currentMile = wallHights[i];
            if (currentMile < 30) {
                totalCount++;
                dailyCount++;
                wallHights[i]++;
            } else {
                finishedMiles++;
            }
        }
        if (finishedMiles == wallHights.length) {
            break;
        }
        output.push(dailyCount * dailyConcreteForDayPMile);
        dailyCount = 0;
    }

    let totalPrice = 0;

    console.log(output.join(', '));
    for (let day of output) {
        totalPrice += day * concretePrice
    }
    console.log(`${totalPrice} pesos`);

}


buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);


