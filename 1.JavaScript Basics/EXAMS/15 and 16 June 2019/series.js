function series(input) {

    let boudget = Number(input[0]);
    let countSerials = Number(input[1]);
    let index = 2;

    for (let i = 0; i < countSerials; i++) {
        let serial = input[index];
        index++;
        let price = Number(input[index]);
        index++;

        switch (serial) {
            case 'Thrones':
                boudget-=price*0.5;
                break;
            case 'Lucifer':
                boudget-=price*0.6;
                break;
            case 'Protector':
                boudget-=price*0.7;
                break;
            case 'TotalDrama':
                boudget-=price*0.8;
                break;
            case 'Area':
                boudget-=price*0.9;
                break;
            default:
                boudget-=price;
                break;
        }

    }

    if(boudget<0){
        console.log(`You need ${Math.abs(boudget).toFixed(2)} lv. more to buy the series!`);
    }else{
        console.log(`You bought all the series and left with ${boudget.toFixed(2)} lv.`);
    }

}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"]);