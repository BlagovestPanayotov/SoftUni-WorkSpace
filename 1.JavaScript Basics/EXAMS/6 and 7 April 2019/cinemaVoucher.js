function cinemaVoucher(input) {
    let voucherAmount = Number(input[0]);
    let index = 1;
    let countTickets = 0;
    let countItems = 0;

    while (true) {
        let item = input[index];
        index++;
        if (item === 'End') {
            break;
        }
        let priceItem = 0;
        if (item.length > 8) {
            priceItem = item.charCodeAt(0) + item.charCodeAt(1);
            voucherAmount-=priceItem;
            if(voucherAmount<0){
                break;
            }
            countTickets++;
        } else {
            priceItem = item.charCodeAt(0);
            voucherAmount-=priceItem;
            if(voucherAmount<0){
                break;
            }
            countItems++;
        }
    }
    console.log(countTickets);
    console.log(countItems);

}
cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"]);