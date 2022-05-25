function catWalking(input){

    let walkingTime = Number(input[0]);
    let countWalks = Number(input[1]);
    let takenCallories = Number(input[2]);

    let burnedCallories = walkingTime*countWalks*5;

    let extraCallory = takenCallories/2;

    if(extraCallory<=burnedCallories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${Math.ceil(burnedCallories)}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${Math.ceil(burnedCallories)}.`);
    }

}

catWalking(['100','1','500']);