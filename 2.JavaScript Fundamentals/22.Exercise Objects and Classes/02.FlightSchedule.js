function flightSchedule(input) {

    class Flight {
        constructor(number, destonation, status = 'Readdy to fly') {
            this.number = number;
            this.destonation = destonation;
            this.status = status;
        }
    }

    let flightsInArr = input.shift();
    let flightsInObj = [];

    for (let fly of flightsInArr) {
        fly = fly.split(' ');
        flightsInObj.push(new Flight(fly.shift(), fly.join(' ')));
    }

    let changes = input.shift();
    for (let flight of changes) {
        flight = flight.split(' ');
        let flightNum = flight[0];
        let flightStatus = flight[1];
        if (flightsInObj.find(obj => obj.number === flightNum)) {
            flightsInObj.find(obj => obj.number === flightNum).status = flightStatus;
        }
    }

    let wantedFlights = input.shift().join();
    for(let flight of flightsInObj){
        if(flight.status === wantedFlights){
            console.log(`{ Destination: '${flight.destonation}', Status: '${flight.status}' }`);
        }
    }

}





flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]);
// flightSchedule([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK330 Cancelled'],
//     ['Ready to fly']
// ]
// );