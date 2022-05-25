function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let countStudents = Number(input[2]);
    let countNights = Number(input[3]);

    let price = 0;
    let typeSport = '';

    switch (season) {
        case 'Winter':
            if (typeGroup === 'boys') {
                typeSport = 'Judo';
                price = 9.60 * countStudents * countNights;
            } else if (typeGroup === 'girls') {
                typeSport = 'Gymnastics';
                price = 9.60 * countStudents * countNights;
            } else {
                typeSport = 'Ski';
                price = 10 * countStudents * countNights;
            }
            break;
        case 'Spring':
            if (typeGroup === 'boys') {
                typeSport = 'Tennis';
                price = 7.20 * countStudents * countNights;
            } else if (typeGroup === 'girls') {
                typeSport = 'Athletics';
                price = 7.20 * countStudents * countNights;
            } else {
                typeSport = 'Cycling';
                price = 9.50 * countStudents * countNights;
            }
            break;
        case 'Summer':
            if (typeGroup === 'boys') {
                typeSport = 'Football';
                price = 15 * countStudents * countNights;
            } else if (typeGroup === 'girls') {
                typeSport = 'Volleyball';
                price = 15 * countStudents * countNights;
            } else {
                typeSport = 'Swimming';
                price = 20 * countStudents * countNights;
            }
            break;
    }
    if (countStudents >= 50) {
        price *= 0.5;
    } else if (countStudents >= 20) {
        price *= 0.85;
    } else if (countStudents >= 10) {
        price *= 0.95;
    }

    console.log(`${typeSport} ${price.toFixed(2)} lv.`);
}
schoolCamp(['Spring',
    'girls',
    '20',
    '7'])