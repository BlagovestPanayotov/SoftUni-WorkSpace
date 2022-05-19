function easterBake(input) {

    let countEasterBread = Number(input[0]);
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;
    let totalSugar = 0;
    let totalFlour = 0;

    for (let index = 1; index <= countEasterBread*2; index += 2) {
        let sugar = Number(input[index]);
        let flour = Number(input[index + 1]);
        if (maxFlour < flour) {
            maxFlour = flour;
        }
        if (maxSugar < sugar) {
            maxSugar = sugar;
        }
        totalFlour += flour;
        totalSugar += sugar;
    }

    let packsFlour = Math.ceil(totalFlour / 750);
    let packsSugar = Math.ceil(totalSugar / 950);

    console.log(`Sugar: ${packsSugar}`);
    console.log(`Flour: ${packsFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"]);