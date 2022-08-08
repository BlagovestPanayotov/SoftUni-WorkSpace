function rotateArray(input) {
    let repetitions = Number(input[input.length - 1]);
    let arr = [];
    for (let i = 0; i < input.length - 1; i++) {
        arr.push(input[i]);
    }


    if (repetitions > arr.length) {
        repetitions = repetitions % arr.length;
    }

    for (let i = 0; i < repetitions; i++) {
        let lastElement = arr[arr.length - 1];
        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = lastElement;
    }
    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);
console.log('------------');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
