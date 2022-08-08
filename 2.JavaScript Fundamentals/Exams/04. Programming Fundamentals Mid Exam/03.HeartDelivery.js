function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);

    let index = 0;
    let command = input[index++];
    let currentPosition = 0;

    while (command !== "Love!") {

        command = command.split(' ');
        let jump = Number(command[1]);

        currentPosition += jump;
        if (currentPosition >= neighborhood.length) {
            currentPosition = 0;
        }

        if (neighborhood[currentPosition] == 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
            neighborhood[currentPosition] -= 2;
            if (neighborhood[currentPosition] == 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }

        command = input[index++];
    }

    let isSuccessful = true
    let counter = 0;
    for (let house of neighborhood) {
        if (house !== 0) {
            isSuccessful = false;
            counter++;
        }
    }

    console.log(`Cupid's last position was ${currentPosition}.`);
    if (isSuccessful) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }


}



// heartDelivery(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);