function tournamentOfChristmas(input){

    let days = Number(input[0]);
    let index = 1;
    let racedMoney = 0;
    let racedMoneyPerDay = 0;
    let counterWin = 0;
    let counterLose = 0;
    let totalWin = 0;
    let totalLose = 0;

    let counterDays = 0;

    while(counterDays<days){
        let currentInput = input[index];

        if(currentInput==='Finish'){
            counterDays++;
            index++;
            if(counterWin>counterLose){
                racedMoneyPerDay*=1.1;
            }
            racedMoney+=racedMoneyPerDay;
            racedMoneyPerDay = 0;
            totalWin += counterWin;
            counterWin = 0;
            totalLose += counterLose;
            counterLose = 0;
            continue;
        }

        if(currentInput === 'win'){
            racedMoneyPerDay+=20;
            counterWin++;
        }else if(currentInput === 'lose'){
            counterLose++;
        }
        index++;

    }

    if(totalWin>totalLose){
        racedMoney*=1.2;
        console.log(`You won the tournament! Total raised money: ${racedMoney.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${racedMoney.toFixed(2)}`);
    }

}

tournamentOfChristmas(['3',
    'darts',
    'lose',
    'handball',
    'lose',
    'judo',
    'win',
    'Finish',
    'snooker',
    'lose',
    'swimming',
    'lose',
    'squash',
    'lose',
    'table tennis',
    'win',
    'Finish',
    'volleyball',
    'win',
    'basketball',
    'win',
    'Finish'])