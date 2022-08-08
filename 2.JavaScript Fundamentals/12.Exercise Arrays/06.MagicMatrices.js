function magicMatrices(input) {
    let sum = 0;
    let isMagic = true;
    for (let num of input) {
        sum += num[0];
    }

    for (let i = 1; i < input.length; i++) {
        let currentSum = 0;
        for (let num of input) {
            currentSum += num[i];
        }
        if (currentSum !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);

}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
console.log('------------');
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
console.log('------------');
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
console.log('------------');