function arrayManipulator(arr, commands) {

    for (let command of commands) {
        let currentComand = command.split(' ');
        switch (currentComand[0]) {
            case 'add':
                add(currentComand, arr);
                break;
            case 'addMany':
                addMany(currentComand, arr);
                break;
            case 'contains':
                contains(currentComand, arr);
                break;
            case 'remove':
                remove(currentComand, arr);
                break;
            case 'shift':
                shift(currentComand, arr);
                break;
            case 'sumPairs':
                sumPairs(arr);
                break;
            case 'print':
                print(arr)
                break;
        }

    }

    function add(currentComand, arr) {
        let index = Number(currentComand[1]);
        let element = Number(currentComand[2]);
        if (index >= 0) {
            arr.splice(index, 0, element);
        }
    }

    function addMany(currentComand, arr) {
        currentComand.shift();
        let index = Number(currentComand.shift());
        let newNums = currentComand.map(Number);
        if (index >= 0) {
            arr.splice(index, 0, ...newNums);
            index++;
        }
    }

    function contains(currentComand, arr) {
        let index = arr.indexOf(Number(currentComand[1]));
        console.log(index);
    }

    function remove(currentComand, arr) {
        let index = Number(currentComand[1]);
        if (index >= 0) {
            arr.splice(index, 1);
        }

    }

    function shift(currentComand, arr) {
        let index = Number(currentComand[1]);
        if (index >= 0) {
            let elements = arr.splice(0, index);
            arr.push(...elements);
        }
    }

    function sumPairs(arr) {
        let newLength = arr.length % 2 === 0
            ? arr.length / 2
            : arr.length / 2 + 1;

        if (arr.length % 2 !== 0) {
            arr.push(0);
        }
        let counter = 0
        for (let i = 0; i < arr.length / 2; i++) {
            arr[i] = arr[counter++] + arr[counter++];
        }
        while (arr.length > newLength) {
            arr.pop();
        }
    }

    function print(arr) {
        console.log(`[ ${arr.join(', ')} ]`)
    }

}









// arrayManipulator([1, 2, 4, 5, 6, 7, 9, -1], ['sumPairs', 'print']);

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);