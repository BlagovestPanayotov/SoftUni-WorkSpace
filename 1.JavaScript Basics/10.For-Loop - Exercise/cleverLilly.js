function cleverLilly(input) {
    let age = Number(input[0]);
    let priceWashinmachine = Number(input[1]);
    let pricePToy = Number(input[2]);

    let toyCounts = 0;
    let saving = 0;
    let giftMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCounts++;
        } else {
            saving += giftMoney;
            giftMoney += 10;
            saving--;
        }
    }

    saving += toyCounts * pricePToy;
    let diff = saving - priceWashinmachine;

    if (diff >= 0) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(diff).toFixed(2)}`);
    }
}

cleverLilly(["21",
"1570.98",
"3"]);