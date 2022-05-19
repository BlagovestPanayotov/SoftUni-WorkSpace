function easterEggs(input) {

    let countEggs = Number(input[0]);

    let countRed = 0;
    let countOrange = 0;
    let countGreen = 0;
    let countBlue = 0;

    let maxEggsCount = 0;
    let maxEggsColor = ''

    for (let index = 1; index <= countEggs; index++) {
        const eggColor = input[index];
        switch (eggColor) {
            case 'red':
                countRed++;
                if (countRed > maxEggsCount) {
                    maxEggsColor = 'red';
                    maxEggsCount = countRed;
                }
                break;
            case 'orange':
                countOrange++;
                if (countOrange > maxEggsCount ) {
                    maxEggsColor = 'orange';
                    maxEggsCount = countOrange;
                }
                break;
            case 'blue':
                countBlue++;
                if (countBlue > maxEggsCount) {
                    maxEggsColor = 'blue';
                    maxEggsCount = countBlue;
                }
                break;
            case 'green':
                countGreen++;
                if (countGreen > maxEggsCount) {
                    maxEggsColor = 'green';
                    maxEggsCount = countGreen;
                }
                break;
        }
    }

    console.log(`Red eggs: ${countRed}`);
    console.log(`Orange eggs: ${countOrange}`);
    console.log(`Blue eggs: ${countBlue}`);
    console.log(`Green eggs: ${countGreen}`);
    console.log(`Max eggs: ${maxEggsCount} -> ${maxEggsColor}`);


}

easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) ;