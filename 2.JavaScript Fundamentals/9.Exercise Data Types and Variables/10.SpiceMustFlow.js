function spiceMustFlow(startYield) {

    let yield = startYield;
    let collectedYield = 0;
    let counterDays = 0;
    while (yield >= 100) {
        collectedYield += yield;
        yield -= 10;
        collectedYield -= 26;
        counterDays++;
    }
    collectedYield -= 26;
    if (collectedYield < 0) {
        collectedYield = 0;
    }

    console.log(counterDays);
    console.log(collectedYield);


}
spiceMustFlow(450);
