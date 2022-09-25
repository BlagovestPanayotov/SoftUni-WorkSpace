function addAndRemoveElements(arr) {
    let counter = 1;
    const output = [];
    arr.forEach(x => {
        x === 'add' ?
            output.push(counter++) :
            output.pop(counter++);
    })
    return output.length === 0 ?
        'Empty' :
        output.join('\n');

}
console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']));