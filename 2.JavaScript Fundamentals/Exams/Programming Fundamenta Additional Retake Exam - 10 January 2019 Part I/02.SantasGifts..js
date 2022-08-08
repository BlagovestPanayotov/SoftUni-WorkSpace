function santasGifts(input) {
    let commandsCount = input.shift();
    let houses = input.shift().split(' ').map(Number);
    let position = 0;
    let commands = {
        'Forward': (houses, position, index) => {
            index = Number(index);
            let newPosotion = position + index;
            if (newPosotion >= 0 && newPosotion < houses.length) {
                houses.splice(newPosotion, 1);
            }
            return newPosotion < houses.length ? newPosotion : houses.length;

        },
        'Swap': (houses, position, valueOne, valueTwo) => {
            valueOne = Number(valueOne);
            valueTwo = Number(valueTwo);
            let indexOne = houses.indexOf(valueOne);
            let indexTwo = houses.indexOf(valueTwo);
            if (indexOne >= 0 && indexOne < houses.length
                && indexTwo >= 0 && indexTwo < houses.length) {
                let buff = houses[indexOne];
                houses[indexOne] = houses[indexTwo];
                houses[indexTwo] = buff;
            }
            return position < houses.length ? position : houses.length;

        },
        'Gift': (houses, position, index, value) => {
            index = Number(index);
            value = Number(value);
            if (index < 0) {
                houses.unshift(value);
                return 0;
            } else if (index >= 0 && index <= houses.length) {
                houses.splice(index, 0, value);
                return index;
            } else {
                houses.push(value)
                return houses.length-1;
            }
        },
        'Back': (houses, position, index) => {
            index = Number(index);
            let newPosotion = position - index;
            if (newPosotion >= 0 && newPosotion < houses.length) {
                houses.splice(newPosotion, 1);
            }
            return newPosotion < houses.length ? newPosotion : houses.length;
        }
    }

    for (let i = 0; i < commandsCount; i++) {
        let [command, tokenOne, tokenTwo] = input[i].split(' ');
        position = commands[command](houses, position, tokenOne, tokenTwo);
    }
    console.log(`Position: ${position}`);
    console.log(houses.join(', '));
}
santasGifts(['6',
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1'
])
// santasGifts(['5',
//     '255 500 54 78 98 24 30 47 69 58',
//     'Forward 1',
//     'Swap 54 47',
//     'Gift 1 20',
//     'Back 1',
//     'Forward 3'
// ]);