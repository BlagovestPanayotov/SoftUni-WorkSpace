function walking(input) {
    let goal = 10000;
    let index = 0;
    let command = input[index++];
    let steps = 0;

    while (command !== 'Going home') {
        command = Number(command);
        steps += command;
        if (steps >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${steps - goal} steps over the goal!`);
            break;
        }
        command = input[index++];
    }

    if (command === 'Going home') {
        command = Number(input[index]);
        steps += command;
        if (steps >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${steps - goal} steps over the goal!`);
        } else {
            console.log(`${Math.abs(steps - goal)} more steps to reach goal.`);
        }

    }

}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])