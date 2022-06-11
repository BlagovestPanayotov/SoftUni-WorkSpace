function bombNumbers(sequence, bomb) {
    let bombNum = bomb.shift();
    let bombPower = Math.abs(bomb.shift());


    while (sequence.includes(bombNum)) {

        let index = sequence.indexOf(bombNum);
        let firstElement = index - bombPower;
        let countElements = bombPower * 2 + 1;

        if (firstElement < 0) {
            countElements += firstElement;
            firstElement = 0;
        }

        sequence.splice((firstElement), (countElements));
    }

    let sum = 0;
    for (let n of sequence) {
        sum += n;
    }
    console.log(sum);

}


bombNumbers([2, 1, 1, 1, 2, 1], [2, 1]);