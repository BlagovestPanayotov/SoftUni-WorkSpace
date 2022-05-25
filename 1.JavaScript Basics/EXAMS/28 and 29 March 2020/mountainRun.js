function mountainRun(input){

    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);

    let delay = Math.floor(distance/50) * 30;

    let georgeTime = distance*speed + delay;

    let diff = georgeTime - currentRecord;

    if(diff < 0){
        console.log(`Yes! The new record is ${georgeTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }

}

mountainRun(['1377',
    '389',
    '3']);