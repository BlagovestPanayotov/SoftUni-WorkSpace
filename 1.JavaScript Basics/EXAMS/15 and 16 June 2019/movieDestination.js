function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let countDays = input[3];

    let price = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Winter') {
                price = countDays * 45000;
            } else {
                price = countDays * 40000;
            }
            price *= 0.7;
            break;            
        case 'Sofia':
            if (season === 'Winter') {
                price = countDays * 17000;
            } else {
                price = countDays * 12500;
            }
            price *= 1.25;
            break;
        case 'London':
            if (season === 'Winter') {
                price = countDays * 24000;
            } else {
                price = countDays * 20250;
            }
            break;
    }
    let diff = budget-price;
    if(diff>=0){
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    }else{
        console.log(`The director needs ${Math.abs(diff).toFixed(2)} leva more!`);
    }
}
movieDestination(["200000",
"London",
"Summer",
"7"]);