function piramid(base, increment) {

    let sotneCount = 0;
    let marbleCount = 0;
    let lapisLazuliCount = 0;
    let gold = 0;

    base = Number(base);
    increment = Number(increment);
    let counterLevel = 0;

    if (base % 2 === 0) {
        while (base > 2) {
            counterLevel++;
            if (counterLevel % 5 === 0) {
                lapisLazuliCount += base * 4 - 4;
            } else {
                marbleCount += base * 4 - 4;
            }
            sotneCount += Math.pow(base - 2, 2);
            base -= 2;
        }
        counterLevel++;
        gold += 4 * increment;
    } else {
        while (base > 1) {
            counterLevel++;
            if (counterLevel % 5 === 0) {
                lapisLazuliCount += base * 4 - 4;
            } else {
                marbleCount += base * 4 - 4;
            }
            sotneCount += Math.pow(base - 2, 2);
            base -= 2;
        }
        counterLevel++;
        gold += increment;
    }

    console.log(`Stone required: ${Math.ceil(sotneCount * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleCount * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCount * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(counterLevel * increment)}`);
}
piramid(1, 1);
