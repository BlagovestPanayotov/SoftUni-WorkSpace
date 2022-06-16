function shootForTheWin(input) {

    let numbers = input.shift().split(' ').map(Number);

    let index = 0;
    let command = input[index++];

    let counterShoot = 0;

    while (command !== 'End') {

        let num = Number(command);
        if (num >= 0 && num < numbers.length && numbers[num] !== -1) {
            counterShoot++;
            let currentNum = numbers[num];

            numbers[num] = -1;

            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] !== -1 && i !== num) {
                    if (numbers[i] > currentNum) {
                        numbers[i] -= currentNum;
                    } else {
                        numbers[i] += currentNum;
                    }
                }
            }

        }
        command = input[index++];
    }

    console.log(`Shot targets: ${counterShoot} -> ${numbers.join(' ')}`);

}





shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]));
shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]));