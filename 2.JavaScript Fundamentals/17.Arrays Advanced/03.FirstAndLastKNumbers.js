function firstAndLastKNumbers(arr) {
    let n = arr.shift();

    let firstElements = arr.slice(0,n);
    let lastElements = arr.slice(-n);
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));


}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
