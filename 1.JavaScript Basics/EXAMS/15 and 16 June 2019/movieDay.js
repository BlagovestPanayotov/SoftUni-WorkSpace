function movieDay(input){
    let totalTime = Number(input[0]);
    let countSets = Number(input[1]);
    let setTime = Number(input[2]);

    totalTime *= 0.85;
    totalTime = totalTime-(countSets*setTime);

    if(totalTime>=0){
        console.log(`You managed to finish the movie on time! You have ${totalTime.toFixed(0)} minutes left!`);
    }else{
        console.log(`Time is up! To complete the movie you need ${Math.abs(totalTime).toFixed(0)} minutes.`);
    }

}
movieDay(["60",
"15",
"3"]);