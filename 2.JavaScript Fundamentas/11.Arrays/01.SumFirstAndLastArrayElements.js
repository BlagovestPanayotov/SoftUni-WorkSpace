function sumFirstAndLastArrayElements(nums) {
    let firstNum = nums[0];
    let lastNum = nums[nums.length - 1];

    let sum = firstNum + lastNum;
    console.log(sum);
}
sumFirstAndLastArrayElements([1, 2, 3, 4, 5, 6]);
sumFirstAndLastArrayElements([1, 2, 3, 4, 5, 6, 7]);
sumFirstAndLastArrayElements([1, 2, 3, 4, 5, 6, 8, 9, 10]);
