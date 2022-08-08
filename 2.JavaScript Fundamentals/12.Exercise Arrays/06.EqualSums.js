function equalSums(input) {

    let isEqual = false;

    for (let i = 1; i < input.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < i; j++) {
            sumLeft += input[j];
        }
        for (let k = i + 1; k < input.length; k++) {
            sumRight += input[k];
        }
        if (sumLeft === sumRight) {
            console.log(i);
            isEqual = true;
            break;
        }
    }
    if (input.length === 1) {
        console.log(0);
        isEqual = true;
    }
    if (!isEqual) {
        console.log('no');
    }

}
equalSums([1, 2, 3, 3]);
console.log('-----------');
equalSums([1, 2]);
console.log('-----------');
equalSums([1]);
console.log('-----------');
equalSums([1, 2, 3]);
console.log('-----------');
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);