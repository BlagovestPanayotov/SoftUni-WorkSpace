function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index++]);

    let command = input[index++];
    let totalScore = 0;
    let counterTasks = 0;
    while (command !== 'Finish') {
        nameTask = command;
        counterTasks++;
        let currentScore = 0;
        for (let i = 0; i < jury; i++) {
            currentScore += Number(input[index++]);
        }

        let currentAVS = currentScore / jury;
        console.log(`${nameTask} - ${currentAVS.toFixed(2)}.`);
        totalScore += currentAVS;

        command = input[index++];
    }
    let totalAVS = totalScore / counterTasks;

    console.log(`Student's final assessment is ${totalAVS.toFixed(2)}.`);

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);