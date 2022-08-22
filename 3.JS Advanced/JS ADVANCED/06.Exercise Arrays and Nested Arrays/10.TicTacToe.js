function ticTacToe(input) {

    let field = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];

    let player = 'X';
    let hasWinner = false;

    for (let action of input) {
        action = action.split(' ').map(Number);
        let row = action[0];
        let col = action[1]
        
        if (field[row][col] === false) {
            field[row][col] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        for (let i = 0; i < 3; i++) {
            if (winChecker(field[i][0], field[i][1], field[i][2])) {
                hasWinner = true;
                break;
            }
            if (winChecker(field[0][i], field[1][i], field[2][i])) {
                hasWinner = true;
                break;
            }
            if (i == 0) {
                if (winChecker(field[0][0], field[1][1], field[2][2])) {
                    hasWinner = true;
                    break;
                }

                if (winChecker(field[0][2], field[1][1], field[2][0])) {
                    hasWinner = true;
                    break;
                }

            }

        }
        if (hasWinner) {
            break;
        }
        if (player === 'X') {
            player = 'O';
        } else if (player === 'O') {
            player = 'X';
        }

        if (!field[0].includes(false)
            && !field[1].includes(false)
            && !field[2].includes(false)) {
            break;
        }

    }

    if (!hasWinner) {
        console.log('The game ended! Nobody wins :(');
    }
    for (let row of field) {
        console.log(row.join('\t'));
    }


    function winChecker(pOne, pTwo, pTree) {
        if (pOne !== false && pOne === pTwo && pOne === pTree) {
            console.log(`Player ${player} wins!`);
            return true;
        } else {
            return false;
        }
    }

}
ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 1",
        "1 2",
        "2 2",
        "2 1",
        "0 0"]);
// ticTacToe(
//     ["0 0",
//         "0 0",
//         "1 1",
//         "0 1",
//         "1 2",
//         "0 2",
//         "2 2",
//         "1 2",
//         "2 2",
//         "2 1"]);
ticTacToe(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]);