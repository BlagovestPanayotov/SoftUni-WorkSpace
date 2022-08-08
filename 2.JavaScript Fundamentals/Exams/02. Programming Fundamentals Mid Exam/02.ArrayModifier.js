function arrayModifier(input) {

    let elements = input.shift().split(' ');

    let index = 0;

    let command = input[index++];

    while (command !== 'end') {

        let currentCommand = command.split(' ');

        switch (currentCommand[0]) {
            case 'swap':
                swap(currentCommand, elements);
                break;
            case 'multiply':
                multiply(currentCommand, elements);
                break;
            case 'decrease':
                elements = elements.map(x => --x);
                break;
        }

        command = input[index++];
    }

    console.log(elements.join(', '));

    function swap(currentCommand, elements) {
        let elementHolder = elements[currentCommand[1]];
        elements[currentCommand[1]] = elements[currentCommand[2]];
        elements[currentCommand[2]] = elementHolder;
    }
    function multiply(currentCommand, elements) {
        elements[currentCommand[1]] *= elements[currentCommand[2]];
    }
    

}




arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrayModifier(['1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);