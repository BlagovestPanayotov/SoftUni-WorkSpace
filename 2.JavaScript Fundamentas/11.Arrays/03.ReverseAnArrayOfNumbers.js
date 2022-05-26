function reverseAnArrayOfNumbers(num, arr) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr.reverse().join(' '));

}
reverseAnArrayOfNumbers(3, [-1, 20, 99, 5]);