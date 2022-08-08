function theLift(input) {
    let people = input.shift();
    let wagons = input.shift().split(' ').map(Number);
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            let availableRoom = 4 - wagons[i];
            if (availableRoom >= people) {
                wagons[i] += people;
                people = 0;
                break;
            }
            wagons[i] = 4;
            people -= availableRoom;
        }

    }

    if (wagons[wagons.length - 1] === 4 && people === 0) {
        console.log(wagons.join(' '));
    } else if (wagons[wagons.length - 1] === 4 && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (wagons[wagons.length - 1] < 4 && people === 0) {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    }


}
theLift(["20", "0 2 0"]);