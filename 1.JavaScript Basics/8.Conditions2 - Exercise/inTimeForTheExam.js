function inTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let houtArrived = Number(input[2]);
    let minutesArrived = Number(input[3]);

    let totalMinutesExam = hourExam * 60 + minutesExam;
    let totalMinutesArrived = houtArrived * 60 + minutesArrived;

    let diff = totalMinutesExam - totalMinutesArrived;

    if (diff > 30) {
        console.log('Early');
        if (diff >= 60) {
            if (diff % 60 < 10) {
                console.log(`${Math.floor(diff / 60)}:0${diff % 60} hours before the start`);
            } else {
                console.log(`${Math.floor(diff / 60)}:${diff % 60} hours before the start`);
            }
        } else {
            console.log(`${diff} minutes before the start`);
        }
    } else if (diff <= 30 && diff >= 0) {
        console.log('On time');
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log('Late');
        diff = Math.abs(diff);
        if (diff >= 60) {
            if (diff % 60 < 10) {
                console.log(`${Math.floor(diff / 60)}:0${diff % 60} hours after the start`);
            } else {
                console.log(`${Math.floor(diff / 60)}:${diff % 60} hours after the start`);
            }
        } else {
            console.log(`${diff} minutes after the start`);
        }
    }

}
inTimeForTheExam(["9", "30", "9", "50"]);//Late 20 minutes after the start
inTimeForTheExam(["9", "00", "10", "30"]);//Late 1:30 hours after the start
inTimeForTheExam(["10", "00", "10", "00"]);//On time
inTimeForTheExam(["9", "00", "8", "30"]);//On time 30 minutes before the start
inTimeForTheExam(["14", "00", "13", "55"]);//On time 5 minutes before the start
inTimeForTheExam(["11", "30", "10", "55"]);//Early 35 minutes before the start
