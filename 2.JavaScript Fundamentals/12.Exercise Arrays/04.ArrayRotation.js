function arrayRotation(arr, num) {
    if (num >= arr.length) {
        num -= arr.length;
    }
    let newArr = arr;
    for (let i = 0; i < num; i++) {
        let oldElement = newArr[0];
        for (let j = 0; j < newArr.length - 1; j++) {
            newArr[j] = newArr[j + 1];
        }
        newArr[newArr.length - 1] = oldElement;
    }
    console.log(newArr.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2);