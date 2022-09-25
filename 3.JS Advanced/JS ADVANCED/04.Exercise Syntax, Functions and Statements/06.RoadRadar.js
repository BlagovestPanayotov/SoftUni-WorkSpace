function roadRadar(speed, area) {

    const speedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    if (speed > speedLimit[area]) {

        const overLimitSpeed = speed - speedLimit[area];
        let status = ''
        if (overLimitSpeed <= 20) {
            status = 'speeding';
        } else if (overLimitSpeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`);

    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');