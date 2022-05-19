function easterEggsBattle(input) {

    let eggsPOne = Number(input[0]);
    let eggsPTwo = Number(input[1]);

    let index = 2;
    let currentInput = input[index];

    while (true) {
        if (currentInput === 'one') {
            eggsPTwo--;
        } else {
            eggsPOne--;
        }
        if (eggsPOne === 0) break;
        if (eggsPTwo === 0) break;

        index++;
        currentInput = input[index];
        if (currentInput === 'End') break;
    }

    if (currentInput === 'End') {
        console.log(`Player one has ${eggsPOne} eggs left.`);
        console.log(`Player two has ${eggsPTwo} eggs left.`);
    } else {
        if (eggsPOne == 0) {
            console.log(`Player one is out of eggs. Player two has ${eggsPTwo} eggs left.`);
        } else {
            console.log(`Player two is out of eggs. Player one has ${eggsPOne} eggs left.`);
        }
    }

}

easterEggsBattle(['6',
    '3',
    'one',
    'two',
    'two',
    'one',
    'one'])