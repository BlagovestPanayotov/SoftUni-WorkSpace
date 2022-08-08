function counterStrike(input) {

    let energy = Number(input.shift());

    let index = 0;
    let currentComand = input[index++];
    let counterWin = 0;
    let isWinner = true;

    while (currentComand !== "End of battle") {
        let distance = Number(currentComand);

        if (energy >= distance) {
            energy -= distance;
            counterWin++;
            if (counterWin % 3 === 0) {
                energy += counterWin;
            }
        } else {
            isWinner = false;
            console.log(`Not enough energy! Game ends with ${counterWin} won battles and ${energy} energy`);
            break;
        }

        currentComand = input[index++];
    }

    if (isWinner) {
        console.log(`Won battles: ${counterWin}. Energy left: ${energy}`);
    }

}





counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]));
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]));