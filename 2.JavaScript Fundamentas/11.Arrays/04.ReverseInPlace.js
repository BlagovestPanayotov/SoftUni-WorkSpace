function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let newIndex = arr.length - 1 - i;
        arr[i] = arr[newIndex];
        arr[newIndex] = oldElement;
    }
    console.log(arr.join(' '));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
