function fitnesCenter(input) {
    let countCustomers = Number(input[0]);
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countShake = 0;
    let countBar = 0;

    for (let index = 1; index <= countCustomers; index++) {
        const customer = input[index];
        switch (customer) {
            case 'Back':
                countBack++;
                break;
            case 'Chest':
                countChest++;
                break;
            case 'Legs':
                countLegs++;
                break;
            case 'Abs':
                countAbs++;
                break;
            case 'Protein shake':
                countShake++;
                break;
            case 'Protein bar':
                countBar++;
                break;
        }
    }

    let percentWorkout = ((countBack+countChest+countLegs+countAbs)/countCustomers)*100;
    let percentSupplements = 100-percentWorkout;

    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countShake} - protein shake`);
    console.log(`${countBar} - protein bar`);
    console.log(`${percentWorkout.toFixed(2)}% - work out`);
    console.log(`${percentSupplements.toFixed(2)}% - protein`);
}
fitnesCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"]);