function bitcoinMining(input) {
    let goldFolLv = 67.51;
    let bitcoinFolLv = 11949.16;
    let dayFirstBitcoin = 0;
    let money = 0;

    for (let i = 1; i <= input.length; i++) {
        let dayGold = Number(input[i - 1]);

        if (i % 3 === 0) {
            dayGold *= 0.7;
        }
        money += dayGold * goldFolLv;
        if (!dayFirstBitcoin) {
            dayFirstBitcoin = money > bitcoinFolLv ? i : 0;
        }

    }

    let countBitcoins = Math.floor(money / bitcoinFolLv)

    console.log(`Bought bitcoins: ${countBitcoins}`);
    if (countBitcoins) console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    console.log('Left money: ' + (money - (countBitcoins * bitcoinFolLv)).toFixed(2) + ' lv.');

}
bitcoinMining([50, 100]);