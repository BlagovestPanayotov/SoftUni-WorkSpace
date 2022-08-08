function nXnMatrix(num) {

    let matrix = createMatrix(num);

    printMatrix(matrix);

    function createMatrix(num) {
        return new Array(num).fill(createArray(num));
    }

    function createArray(num) {
        return new Array(num).fill(num);
    }

    function printMatrix(matrix) {
        for (let arr of matrix) {
            console.log(arr.join(' '));
        }
    }

}

nXnMatrix(3);
