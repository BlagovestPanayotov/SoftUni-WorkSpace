function bombNumbers(sequence, bomb) {
    let bombNum = bomb.shift();
    let bombPower = Math.abs(bomb.shift());


    while (sequence.includes(bombNum)) {
        let index = sequence.indexOf(bombNum);
        sequence.splice((index - bombPower), (bombPower * 2 + 1));
    }

    let sum = 0;
    for (let n of sequence) {
        sum += n;
    }
    console.log(sum);

}




bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);