function garage(input) {

    let garages = {};

    for (let line of input) {
        line = line.split(' - ');
        let garageNum = line.shift();
        line = line.pop().split(': ').join(' - ');
        if (garages.hasOwnProperty(garageNum)) {
            garages[garageNum].push(line);
        } else {
            garages[garageNum] = [line]
        }

    }

    for (let garage in garages) {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(car => {
            console.log('---', car);
        });
    }

}


// garage(['1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);