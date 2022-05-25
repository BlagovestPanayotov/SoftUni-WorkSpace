function worldSnookerChampionship(input) {

    let game = input[0];
    let ticket = input[1];
    let countTickets = Number(input[2]);
    let picture = input[3];
    let price = 0;

    switch (game) {
        case 'Quarter final':
            if(ticket==='Standard'){
                price = countTickets * 55.5;
            }else if(ticket==='Premium'){
                price = countTickets * 105.2;
            }else{
                price = countTickets * 118.9;
            }
            break;
        case 'Semi final':
            if(ticket==='Standard'){
                price = countTickets * 75.88;
            }else if(ticket==='Premium'){
                price = countTickets * 125.22;
            }else{
                price = countTickets * 300.4;
            }
            break;
        case 'Final':
            if(ticket==='Standard'){
                price = countTickets * 110.10;
            }else if(ticket==='Premium'){
                price = countTickets * 160.66;
            }else{
                price = countTickets * 400;
            }
            break;
    }

    if(price>4000){
        price*=0.75;
    }else if(price>2500){
        price*=0.9;
        if(picture==='Y') price+=(40*countTickets);
    }else{
        if(picture==='Y') price+=(40*countTickets);
    }

    console.log(price.toFixed(2));

}
worldSnookerChampionship(["Quarter final",
"Standard",
"11",
"N"]);