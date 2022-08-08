function airPollution(sofia, commands) {
    sofia = sofia.map(x => x.split(' ').map(Number));

    for (let command of commands) {
        command = command.split(' ');
        let num = Number(command[1])
        switch (command[0]) {
            case "breeze":
                for (let i = 0; i < 5; i++) {
                    sofia[num][i] -= 15;
                    if (sofia[num][i] < 0) {
                        sofia[num][i] = 0
                    }
                }
                break;
            case "gale":
                for (let i = 0; i < 5; i++) {
                    sofia[i][num] -= 20;
                    if (sofia[i][num] < 0) {
                        sofia[i][num] = 0
                    }
                }
                break;
            case "smog":
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        sofia[i][j] += num;
                    }
                }
                break;
        }
    }

    let result = [];

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (sofia[i][j] >= 50) {
                result.push(`${i}-${j}`);
            }
        }
    }

    if (result.length > 0) {
        console.log(`Polluted areas: [${result.join('], [')}]`);
    } else {
        console.log("No polluted areas");
    }

}
airPollution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
