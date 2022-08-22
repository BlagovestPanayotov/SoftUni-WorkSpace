function extractIncreasingSubsequenceFromArray(arr) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    let result = []

    for(let num of arr){
        if(num>=biggestNum){
            result.push(num);
            biggestNum = num;
        }
    }

    return result;

}
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);