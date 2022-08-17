function roadRadar(speed, area) {

    let areas = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    if (speed > areas[area]) {
        let speeding = speed - areas[area];
        let status;
        if (speeding <= 20) {
            status = 'speeding';
        } else if (speeding <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${areas[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${areas[area]} zone`);
    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');