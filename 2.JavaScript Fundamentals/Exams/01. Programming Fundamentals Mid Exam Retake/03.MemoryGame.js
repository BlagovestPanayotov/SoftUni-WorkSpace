function memoryGame(input) {

    let elements = input.shift().split(' ');

    let moves = 0;

    let index = 0;
    let command = input[index++];

    let isWin = false;

    while (command !== "end") {

        moves++;

        let currentCommand = command.split(' ');

        let indexOne = currentCommand[0];
        let indexTwo = currentCommand[1];

        if ((indexOne >= 0 && indexOne < elements.length
            && indexTwo >= 0 && indexTwo < elements.length)
            && indexOne !== indexTwo) {
            if (elements[indexOne] === elements[indexTwo]) {
                console.log(`Congrats! You have found matching elements - ${elements[indexOne]}!`);
                if (indexOne > indexTwo) {
                    elements.splice(indexOne, 1);
                    elements.splice(indexTwo, 1);
                } else {
                    elements.splice(indexTwo, 1);
                    elements.splice(indexOne, 1);
                }
                if (elements.length == 0) {
                    console.log(`You have won in ${moves} turns!`);
                    isWin = true;
                    break;
                }
            } else {
                console.log("Try again!");
            }
        } else {
            console.log("Invalid input! Adding additional elements to the board");
            elements.splice(elements.length/2, 0, `-${moves}a`, `-${moves}a`);
        }

        command = input[index++];
    }

    if (!isWin) {
        console.log("Sorry you lose :(");
        console.log(elements.join(' '));
    }

}



// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);