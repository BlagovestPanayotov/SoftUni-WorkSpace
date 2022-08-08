function reverseAnArrayOfNumbers(num, arr) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr.reverse().join(' '));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);