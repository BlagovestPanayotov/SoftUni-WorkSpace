function needForSpeedIII(input) {

    let carsCount = Number(input.shift());
    let cars = {};

    for (let i = 0; i < carsCount; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        if (mileage < 100000) {
            cars[car] = {
                mileage: Number(mileage),
                fuel: Number(fuel),
            };
        }
    }

    for (let line of input) {

        let [command, car, tokenOne, tokenTwo] = line.split(' : ');

        switch (command) {
            case 'Drive':
                {
                    let distance = Number(tokenOne);
                    let fuel = Number(tokenTwo);

                    if (cars[car].fuel >= fuel) {
                        cars[car].fuel -= fuel;
                        cars[car].mileage += distance;
                        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                        if (cars[car].mileage >= 100000) {
                            delete cars[car];
                            console.log(`Time to sell the ${car}!`);
                        }
                    } else {
                        console.log("Not enough fuel to make that ride");
                    }
                }
                break;
            case 'Refuel':
                {
                    let fuel = Number(tokenOne);
                    cars[car].fuel += fuel;

                    if (cars[car].fuel > 75) {
                        console.log(`${car} refueled with ${fuel - (cars[car].fuel - 75)} liters`);
                        cars[car].fuel = 75;
                    } else {
                        console.log(`${car} refueled with ${fuel} liters`);
                    }
                }
                break;
            case 'Revert':
                {
                    let kilometers = Number(tokenOne);
                    cars[car].mileage -= kilometers;

                    if (cars[car].mileage < 10000) {
                        cars[car].mileage = 10000;
                    } else {
                        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                    }
                }
                break;
            case 'Stop':

                for (let car in cars) {
                    console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
                }

                return;
        }
    }

}


// needForSpeedIII([
    // '1',
    // 'Audi A6|38000|62',
    // 'Mercedes CLS|11000|35',
    // 'Volkswagen Passat CC|45678|5',
    // 'Drive : Audi A6 : 5888888843 : 47',
    // 'Drive : Mercedes CLS : 988888884 : 11',
    // 'Drive : Volkswagen Passat CC : 68888888889 : 8',
    // 'Refuel : Audi A6 : 50',
    // 'Revert : Mercedes CLS : 500',
    // 'Revert : Audi A6 : 30000',
    // 'Stop'
// ]);
// console.log('-'.repeat(166));
needForSpeedIII([
    '1',
    'Lamborghini Veneno|11111|74',
    // 'Bugatti Veyron|12345|67',
    // 'Koenigsegg CCXR|67890|12',
    // 'Aston Martin Valkryie|99900|50',
    // 'Drive : Koenigsegg CCXR : 382 : 82',
    // 'Drive : Aston Martin Valkryie : 99 : 23',
    // 'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    // 'Revert : Bugatti Veyron : 2000',
    'Stop'
]);