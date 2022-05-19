function timeAdd15Minutes(input){
    let timeHours = Number(input[0]);
    let timeMinutes = Number(input[1]);

    let totalTime = timeHours*60 + timeMinutes + 15;

    let finalHours = Math.floor(totalTime/60);
    let totalMinutes = totalTime%60;

    if(finalHours>23){
        finalHours = 0;
    }
    if(totalMinutes<10){
        console.log(`${finalHours}:0${totalMinutes}`);
    }else{
        console.log(`${finalHours}:${totalMinutes}`);
    }

}
timeAdd15Minutes(["23", "59"]);