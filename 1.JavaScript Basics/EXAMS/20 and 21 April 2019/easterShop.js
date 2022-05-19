function easterShop(input){

    let countEggs = Number(input[0]);
    let index = 1
    let soldEdds = 0

    while(true){
        let currentInput = input[index];
        if(currentInput==='Close'){
            console.log('Store is closed!');
            console.log(`${soldEdds} eggs sold.`);
            break;
        }
        if(currentInput==='Buy'){
            countEggs -= Number(input[index+1]);
            soldEdds += Number(input[index+1]);
        }else{
            countEggs += Number(input[index+1]);
        }

        if(countEggs<0){
            countEggs+= Number(input[index+1]);
            console.log('Not enough eggs in store!');
            console.log(`You can buy only ${countEggs.toFixed(0)}.`);
            break;
        }
        index+=2;
    }
   

}
easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"]);