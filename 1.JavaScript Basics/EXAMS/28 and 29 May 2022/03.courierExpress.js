function courieExpress(input) {
    let weight = Number(input[0]);
    let service = input[1];
    let distance = Number(input[2]);

    let cost = 0;

    if (weight < 1) {
        cost = distance * 0.03;
        if (service === 'express') {
            let extaCost = (0.03 * 0.80) * weight * distance;
            cost += extaCost;
        }
    } else if (weight < 10) {
        cost = distance * 0.05;
        if (service === 'express') {
            let extaCost = (0.05 * 0.40) * weight * distance;
            cost += extaCost;
        }
    } else if (weight < 40) {
        cost = distance * 0.10;
        if (service === 'express') {
            let extaCost = (0.10 * 0.05) * weight * distance;
            cost += extaCost;
        }
    } else if (weight < 90) {
        cost = distance * 0.15;
        if (service === 'express') {
            let extaCost = (0.15 * 0.02) * weight * distance;
            cost += extaCost;
        }
    } else if (weight < 150) {
        cost = distance * 0.20;
        if (service === 'express') {
            let extaCost = (0.20 * 0.01) * weight * distance;
            cost += extaCost;
        }
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${cost.toFixed(2)} lv.`);

}
courieExpress(["87", "express", "130"]);