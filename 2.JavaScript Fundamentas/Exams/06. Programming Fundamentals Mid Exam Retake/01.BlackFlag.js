function blackFlag(input) {

    let days = Number(input[0]);
    let plunderPDay = Number(input[1]);
    let target = Number(input[2]);

    let plunder = 0;
    for (let i = 1; i <= days; i++) {
        plunder += plunderPDay;
        if (i % 3 === 0) {
            plunder += plunderPDay / 2;
        }
        if (i % 5 === 0) {
            plunder *= 0.7;
        }
    }

    if (plunder >= target) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let plungerPercent = plunder / target * 100;
        console.log(`Collected only ${plungerPercent.toFixed(2)}% of the plunder.`);
    }

}



blackFlag(["5",
    "40",
    "100"]);
blackFlag(["10",
    "20",
    "380"]);