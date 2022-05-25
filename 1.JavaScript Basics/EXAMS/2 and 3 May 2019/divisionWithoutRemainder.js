function divisionWithoutRemainder(input){
    let nums = Number(input[0]);
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;

    for(let i = 1; i<=nums; i++){
        let currentNum = Number(input[i]);
        if(currentNum%2===0){
            countP2++;
        }
        if(currentNum%3===0){
            countP3++;
        }
        if(currentNum%4===0){
            countP4++;
        }
    }

    console.log(`${((countP2/nums)*100).toFixed(2)}%`);
    console.log(`${((countP3/nums)*100).toFixed(2)}%`);
    console.log(`${((countP4/nums)*100).toFixed(2)}%`);


}
divisionWithoutRemainder(["3",
"3",
"6",
"9"]);