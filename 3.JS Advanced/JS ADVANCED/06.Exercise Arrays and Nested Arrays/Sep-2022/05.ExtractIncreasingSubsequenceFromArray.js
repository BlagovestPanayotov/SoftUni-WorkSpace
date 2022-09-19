function extractIncreasingSubsequenceFromArray(arr) {
    const output = [];
    output.push(arr[0]);
    arr.forEach((x, i) => { if (i > 0 && x >= output[output.length - 1]) output.push(x) });
    return output;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))