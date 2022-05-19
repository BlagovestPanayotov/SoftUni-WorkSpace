function movieStars(input) {

    let boudget = Number(input[0]);
    let index = 1;

    while (true) {
        let currentAcrtor = input[index];
        index++;
        if (currentAcrtor === 'ACTION') {
            console.log(`We are left with ${boudget.toFixed(2)} leva.`);
            break;
        }

        if (currentAcrtor.length > 15) {
            boudget *= 0.8;
        } else {
            let fee = Number(input[index]);
            index++;
            boudget -= fee;
        }

        if (boudget <= 0) {
            console.log(`We need ${Math.abs(boudget).toFixed(2)} leva for our actors.`);
            break;
        }
    }

}
movieStars(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"]);