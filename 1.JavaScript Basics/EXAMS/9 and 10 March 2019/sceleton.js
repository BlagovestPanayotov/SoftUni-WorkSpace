function sceleton(input){
    let contolMinutes = Number(input[0]);
    let contolSeconds = Number(input[1]);
    let lengthTube = Number(input[2]);
    let timeP100m = Number(input[3]);

    let totalControlTime = contolMinutes*60+contolSeconds;
    let acceleration = lengthTube/120 * 2.5;
    let totalTime = timeP100m*lengthTube/100 - acceleration;

    let diff = totalTime-totalControlTime;

    if(diff>0){
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }else{
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    }


}
sceleton(["1",
"20",
"1546",
"12"]);