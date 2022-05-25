function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let index = 2;

    let countPieces = width * length;

    while (countPieces >= 0) {
        let currenTake = input[index++];

        if (currenTake === 'STOP') {
            console.log(`${countPieces} pieces are left.`);
            break;
        } else {
            countPieces -= Number(currenTake);
            if (countPieces < 0) {
                console.log(`No more cake left! You need ${Math.abs(countPieces)} pieces more.`);
                break;
            }
        }
    }

}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);