// !!! in the logic there is an infinity loop. must be fixed!!!


// // function bunnyKill(hanger) {
// //     let bombPositions = hanger.pop().split(' ').map(x => x.split(','));   //taking the coordinates in the bombs
// //     hanger = hanger.map(x => x.split(' '));
// //     let dealtDemage = 0;
// //     let killedBunnies = 0;

// //     for (let bombPosition of bombPositions) {
// //         bombing(hanger, bombPosition);
// //     }
// //     console.table(hanger);


// //     function bombing(hanger, bombPosition) {
// //         let x = bombPosition[0];    //coordinates in the hanger
// //         let y = bombPosition[1];

// //         if (hanger[x][y] !== 0) {
// //             let bombPower = hanger[x][y];
// //             for (let i = -1; i <= 1; i++) {
// //                 if (i >= 0 && i < hanger[0].length) {
// //                     for (let j = -1; j <= 1; j++) {
// //                         if (j >= 0 && j < hanger[0].length) {
// //                             let currentPositionPower = [i, j];
// //                             if (hanger[i][j] > 0) {     //check if there is a bunny bomb
// //                                 if (hanger[i][j] - bombPower <= 0) {
// //                                     bombing(hanger, currentPositionPower);
// //                                     hanger[i][j] = 0;
// //                                 } else {
// //                                     hanger[i][j] -= bombPower;
// //                                 }
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //         }

// //     }
// // }






// bunnyKill(['10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0']);
// // bunnyKill(['5 10 15 20',
// //     '10 10 10 10',
// //     '10 15 10 10',
// //     '10 10 10 10',
// //     '2,2 0,1']);