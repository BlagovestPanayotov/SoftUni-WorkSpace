function sleepyCatTom(input){

    const PLAY_NORM = 30000;
    const PLAY_TIME_OFFDAY = 127;
    const PLAY_TIME_WORKINGDAY = 63;
    
    const DAYS_OFF = Number(input[0]);

    let totalPlayTime = (365-DAYS_OFF)*PLAY_TIME_WORKINGDAY + DAYS_OFF*PLAY_TIME_OFFDAY;

    let diff = PLAY_NORM - totalPlayTime;

    if(diff >= 0){
        console.log('Tom sleeps well');
        console.log(`${Math.floor(diff/60)} hours and ${diff%60} minutes less for play`);
    }else{
        console.log('Tom will run away');
        console.log(`${Math.floor(Math.abs(diff)/60)} hours and ${Math.abs(diff)%60} minutes more for play`);
    }

}

sleepyCatTom(['113']);