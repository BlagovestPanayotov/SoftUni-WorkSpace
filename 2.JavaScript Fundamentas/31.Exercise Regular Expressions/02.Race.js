function race(input) {

    let racers = input.shift().split(', ');

    let result = {};

    for (let racer of racers) {
        result[racer] = 0;
    }

    let patternName = /([A-Z]|[a-z])/g;
    let patternNum = /\d/g;

    for (let line of (input)) {
        if (line == 'end of race') {
            break;
        }

        let name = line.match(patternName).join('');
        let distance = line.match(patternNum).reduce((a, b) => {
            return Number(a) + Number(b);
        });

        if (result.hasOwnProperty(name)) {
            result[name] += distance;
        }

    };

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
console.log('-'.repeat(16));
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);