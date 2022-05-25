function hightJump(input){
    let wantedHight = Number(input[0]);
    let currentHight = wantedHight-30;
    let index = 1;
    let countJumps = 0;
    let failCount = 0;

    while(wantedHight>=currentHight){
        let currentJump = Number(input[index]);
        if(currentJump>currentHight){
            countJumps++;
            failCount = 0;
            currentHight+=5;
        }else{
            failCount++;
            countJumps++;
        }
        if(failCount===3){
            console.log(`Tihomir failed at ${currentHight}cm after ${countJumps} jumps.`);
            return;
        }
        index++;
    }
    console.log(`Tihomir succeeded, he jumped over ${wantedHight}cm after ${countJumps} jumps.`);

}
hightJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"]);