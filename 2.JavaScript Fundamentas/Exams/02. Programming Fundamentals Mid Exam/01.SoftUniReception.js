function softUniReception(input) {

    let serviceSpeedOne = Number(input.shift());
    let serviceSpeedTwo = Number(input.shift());
    let serviceSpeedThree = Number(input.shift());

    let studentsCount = Number(input.shift());

    let hours = 0;
    let counter = 0;
    while (studentsCount > 0) {
        hours++;
        counter++;
        studentsCount -= serviceSpeedOne + serviceSpeedTwo + serviceSpeedThree;
        if (studentsCount > 0 && counter % 3 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);