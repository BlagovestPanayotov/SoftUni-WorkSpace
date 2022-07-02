function meetings(input) {

    let result = {};

    for (let line of input) {
        line = line.split(' ');
        let [day, name] = line;
        if (result.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, name] of Object.entries(result)) {
        console.log(`${day} -> ${name}`);
    }

}



meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);

console.log('-----------------');

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);