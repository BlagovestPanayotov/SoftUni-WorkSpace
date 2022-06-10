function train(input) {

    let wagons = input.shift().split(' ').map(Number);

    let capacity = Number(input.shift());

    for (let command of input) {
        
        let currendCommand = command.split(' ');

        if (currendCommand.length > 1) {
            wagons.push(Number(currendCommand[1]));
        } else {
            loadingPassanger(Number(currendCommand[0]), wagons, capacity);
        }
    }

    console.log(wagons.join(' '));

    function loadingPassanger(passangers, wagons, capacity) {
        for (let i = 0; i < wagons.length; i++) {
            if ((wagons[i] + passangers) <= capacity) {
                wagons[i] += passangers;
                break;
            }
        }
    }

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);