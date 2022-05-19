function tradeCommition(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let percent = 0;
    let error = false;

    switch (city) {
        case 'Sofia':
            if (sells < 0) {
                error = true;
            } else if (sells <= 500) {
                percent = 0.05;
            } else if (sells <= 1000) {
                percent = 0.07;
            } else if (sells <= 10000) {
                percent = 0.08;
            } else {
                percent = 0.12;
            }
            break;
        case 'Varna':
            if (sells < 0) {
                error = true;
            } else if (sells <= 500) {
                percent = 0.045;
            } else if (sells <= 1000) {
                percent = 0.075;
            } else if (sells <= 10000) {
                percent = 0.10;
            } else {
                percent = 0.13;
            }
            break;
        case 'Plovdiv':
            if (sells < 0) {
                error = true;
            } else if (sells <= 500) {
                percent = 0.055;
            } else if (sells <= 1000) {
                percent = 0.08;
            } else if (sells <= 10000) {
                percent = 0.12;
            } else {
                percent = 0.145;
            }
            break;
            default: error = true; break;
    }

    if(error){
        console.log('error');
    }else{
        console.log((sells*percent).toFixed(2));
    }

}
tradeCommition(["Varna",
"0"]);