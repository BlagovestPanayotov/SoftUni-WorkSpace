arrayManipulations = (input) => {
    //create the array
    let arr = input.shift().split(' ');  
    //create the commands
    addElement = (x, arr) => {
        arr.push(x);
    }
    removeElement = (x, arr) => {
        while (arr.includes(x)) {
            let i = arr.indexOf(x);
            arr.splice(i, 1);
        }
    }
    removeAtIndex = (x, arr) => {
        arr.splice(x, 1);
    }
    insertElement = (x, i, arr) => {
        arr.splice(i, 0, x);
    }
    //manipulate array
    for (let commands of input) {
        let command = commands.split(' ');
        switch (command[0]) {
            case 'Add':
                addElement(command[1], arr);
                break;
            case 'Remove':
                removeElement(command[1], arr);
                break;
            case 'RemoveAt':
                removeAtIndex(command[1], arr);
                break;
            case 'Insert':
                insertElement(command[1], command[2], arr)
                break;
        }
    }
    //print output
    console.log(arr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);