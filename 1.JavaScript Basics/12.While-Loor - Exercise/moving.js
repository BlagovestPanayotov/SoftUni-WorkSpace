function moving(input) {
    let width = Number(input[0]);
    let hight = Number(input[1]);
    let deepth = Number(input[2]);
    let index = 3;

    let space = width * hight * deepth;

    while (space >= 0) {
        let currentTake = input[index++];

        if (currentTake === 'Done') {
            console.log(`${space} Cubic meters left.`);
            break;
        } else {
            space -= Number(currentTake);
            if (space < 0) {
                console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
                break;
            }
        }

    }

}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);