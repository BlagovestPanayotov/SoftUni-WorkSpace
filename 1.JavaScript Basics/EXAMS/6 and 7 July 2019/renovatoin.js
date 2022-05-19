function renovation(input) {
    let hight = Number(input[0]);
    let width = Number(input[1]);
    let percentNotPainted = Number(input[2]);

    let index = 3;
    let paintNeeded = ((hight * width) * 4) - (((hight * width) * 4) * (percentNotPainted / 100));

    while (true) {
        let currentPainting = input[index];
        index++;

        if (currentPainting === 'Tired!') {
            console.log(`${Math.ceil(paintNeeded)} quadratic m left.`);
            break;
        } else {
            currentPainting = Number(currentPainting);
            paintNeeded -= currentPainting;
        }

        if (paintNeeded < 0) {
            console.log(`All walls are painted and you have ${Math.ceil(Math.abs(paintNeeded))} l paint left!`);
            break;
        }

        if (paintNeeded === 0) {
            console.log('All walls are painted! Great job, Pesho!');
            break;
        }



    }

}
renovation(["2",
    "3",
    "25",
    "6",
    "4",
    "8"]);