function timeToWalk(steps, stepLength, speedInKm) {

    let distance = steps * stepLength;

    let speed = speedInKm * 1000 / 3600;
    let time = (distance/speed)+Math.floor(distance/500)*60;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = time % 60;

    console.log(`${hours.toFixed(0).padStart(2, '0')}:${minutes.toFixed(0).padStart(2, '0')}:${seconds.toFixed(0).padStart(2, '0')}`);
    //`hours:minutes:seconds`.
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);