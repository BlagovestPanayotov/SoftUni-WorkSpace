function sortingNumbers(nums) {

    let myNums = nums.slice().sort((a, b) => a - b);
    let result = [];
    while (myNums.length > 0) {
        let firstNum = myNums.shift();
        let lastNum = myNums.pop()
        result.push(firstNum);
        if (lastNum !== 'undefined') {
            result.push(lastNum);
        }
    }
    return result;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);