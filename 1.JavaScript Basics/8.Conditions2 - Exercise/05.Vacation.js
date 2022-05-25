function vacation(input) {
    let budget = Number(input[0]);
    let seson = input[1];

    let accomodation = '';
    let destination = '';
    let price = 0;

    if (seson === 'Summer') {
        destination = 'Alaska';
        if (budget <= 1000) {
            accomodation = 'Camp';
            price = budget * 0.65;
        } else if (budget <= 3000) {
            accomodation = 'Hut';
            price = budget * 0.8;
        } else {
            accomodation = 'Hotel';
            price = budget * 0.9;
        }

    } else if (seson === 'Winter') {
        destination = 'Morocco';
        if (budget <= 1000) {
            accomodation = 'Camp';
            price = budget * 0.45;
        } else if (budget <= 3000) {
            accomodation = 'Hut';
            price = budget * 0.6;
        } else {
            accomodation = 'Hotel';
            price = budget * 0.9;
        }

    }

    console.log(`${destination} - ${accomodation} - ${price.toFixed(2)}`);

}
vacation(['800',
    'Summer'])