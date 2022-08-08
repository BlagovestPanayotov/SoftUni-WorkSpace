function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            if ((num1 + num2) == num) {
                console.log(`${num1} ${num2}`);
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('-------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('-------');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('-------');
