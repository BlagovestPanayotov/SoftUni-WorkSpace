function addAndRemoveElements(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
        } else if (arr[i] === 'remove') {
            result.pop();
        }
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveElements(['remove',
    'remove',
    'remove']);