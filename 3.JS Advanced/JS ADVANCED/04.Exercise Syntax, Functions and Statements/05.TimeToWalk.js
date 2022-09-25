function timeToWalk(countSteps, stepLength, speed) {

    const distance = (countSteps * stepLength);
    const breakTime = Math.floor(distance / 500);

    const totalTime = ((distance) / 1000) / speed + breakTime / 60;
    let timeHours = Math.floor(totalTime);
    let timeMinutes = Math.floor(totalTime * 60);
    let timeSeconds = Math.ceil(totalTime * 3600 - timeMinutes * 60);

    let printingTimeHours = timeHours < 10 ? `0${timeHours}` : `${timeHours}`;
    let printingTimeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : `${timeMinutes}`;
    let printingTimeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : `${timeSeconds}`;

    console.log(`${printingTimeHours}:${printingTimeMinutes}:${printingTimeSeconds}`);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)