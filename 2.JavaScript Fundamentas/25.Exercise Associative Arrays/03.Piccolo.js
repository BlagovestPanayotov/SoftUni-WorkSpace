function piccolo(input) {

    let parking = new Set();

    input.forEach(car => {
        if (car.includes('IN')) {
            parking.add(car.replace('IN, ', ''), 'IN');
        } else if (car.includes('OUT')) {
            parking.delete(car.replace('OUT, ', ''));
        }
    });

    

    if (parking.size > 0) {
        console.log(Array.from(parking).sort().join('\n'));
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