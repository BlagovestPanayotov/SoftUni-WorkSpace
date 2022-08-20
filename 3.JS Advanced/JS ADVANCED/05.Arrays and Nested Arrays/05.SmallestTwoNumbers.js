function smallestTwoNumbers(input) {
    let myArr = input.slice();
    let result = [];
    for (let i = 0; i < 2; i++) {
        let smallestNum = Math.min(...myArr);
        result.push(...myArr.splice(myArr.indexOf(smallestNum), 1));
    }
    console.log(result.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);