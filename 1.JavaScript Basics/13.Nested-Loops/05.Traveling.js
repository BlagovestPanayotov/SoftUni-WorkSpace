function traveling(input) {
    let index = 0;
    let destination = input[index++];

    while (destination !== 'End') {
        let neededMoney = Number(input[index++]);
        while (neededMoney > 0) {
            let savedMoney = Number(input[index++]);
            neededMoney -= savedMoney;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index++];
    }

}
traveling((["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]));
