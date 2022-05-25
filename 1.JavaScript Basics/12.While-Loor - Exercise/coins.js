function coins(input) {
    let change = Number(input[0])*100;
    let coinsCounter = 0;

    while (change > 0) {
        if (change >= 200) {
            coinsCounter++;
            change -=200;
        } else if (change >= 100) {
            coinsCounter++;
            change -=100;
        } else if (change >= 50) {
            coinsCounter++;
            change -=50;
        } else if (change >= 20) {
            coinsCounter++;
            change -=20;
        } else if (change >= 10) {
            coinsCounter++;
            change -=10;
        } else if (change >= 5) {
            coinsCounter++;
            change -=5;
        } else if (change >= 2) {
            coinsCounter++;
            change -=2;
        } else if (change >= 1) {
            coinsCounter++;
            change -=1;
        } else {
            change = 0;
        }
    }
    console.log(coinsCounter);

}
coins(["1.23"]);