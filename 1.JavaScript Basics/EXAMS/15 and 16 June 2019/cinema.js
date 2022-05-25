function cinema(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let income = 0;

    while (true) {
        let currentEnter = input[index++];
        if (currentEnter === 'Movie time!') {
            console.log(`There are ${capacity} seats left in the cinema.`);
            console.log(`Cinema income - ${income} lv.`);
            break;
        }
        currentEnter = Number(currentEnter);
        if ((capacity - currentEnter) < 0) {
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${income} lv.`);
            break;
        } else {
            capacity -= currentEnter;
            if (currentEnter % 3 === 0) {
                income += currentEnter * 5 - 5;
            } else {
                income += currentEnter * 5;
            }
        }
    }

}
cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"]);