function piccolo(input) {

    let parking = new Map();

    input.forEach(car => {
        if (car.includes('IN')) {
            parking.set(car.replace('IN, ', ''), 'IN');
        } else if (car.includes('OUT')) {
            parking.delete(car.replace('OUT, ', ''));
        }
    });

    let result = Array.from(parking.keys())
        .filter(x => parking.get(x) !== 'OUT')
        .sort((a, b) => a.slice(0, 3).localeCompare(b.slice(0, 3))
            || Number(a.slice(2, 6)) - Number(b.slice(2, 6))
            || a.slice(-2).localeCompare(b.slice(-2)));

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }

}



piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);