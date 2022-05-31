function addAndRemove(input) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            output.push(i + 1);
        } else {
            output.pop();
        }
    }

    if (output.length <= 0) {
        console.log('Empty');
    } else {
        console.log(output.join(' '));
    }

}
addAndRemove(['add', 'add', 'add', 'add']);
console.log('-----------');
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('-----------');
addAndRemove(['remove', 'remove', 'remove']);