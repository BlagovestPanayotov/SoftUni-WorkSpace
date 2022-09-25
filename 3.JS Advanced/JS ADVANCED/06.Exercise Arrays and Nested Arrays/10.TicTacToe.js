function ticTacToe(input) {
    const field = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let isFirsPlayer = true;
    for (const x of input) {
        const [row, col] = x.split(' ').map(Number);
        if (field[row][col]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        const mark = isFirsPlayer ? 'X' : 'O';
        field[row][col] = mark;
        if (winChecker(field, mark)) {
            console.log(`Player ${mark} wins!`);
            break;
        }
        if (freeSpaceChecker(field)) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
        isFirsPlayer = !isFirsPlayer;
    }

    for(const row of field){
        console.log(row.join('\t'));
    }

    function freeSpaceChecker(field) {
        for (let row of field) {
            if (row.includes(false)) {
                return false;
            }
        }
        return true;
    }

    function winChecker(field, mark) {
        for (let i = 0; i < 3; i++) {
            if (field[i][0] === mark &&
                field[i][1] === mark &&
                field[i][2] === mark) {
                return true;
            }
            if (field[0][i] === mark &&
                field[1][i] === mark &&
                field[2][i] === mark) {
                return true;
            }
        }
        if (field[0][0] === mark &&
            field[1][1] === mark &&
            field[2][2] === mark) {
            return true;
        }
        if (field[0][2] === mark &&
            field[1][1] === mark &&
            field[2][0] === mark) {
            return true;
        }
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log('------------------');
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
console.log('------------------');
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);