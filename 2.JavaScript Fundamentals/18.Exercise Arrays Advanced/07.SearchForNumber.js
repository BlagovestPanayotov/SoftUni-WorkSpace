function searchForNumber(nums, commands) {
    let takenMus = commands.shift();
    let deleteFurstNums = commands.shift();
    let wantedNum = commands.shift();

    let output = nums.splice(0, takenMus);
    output.splice(0, deleteFurstNums);
    let counter = 0;
    for (let num of output) {
        if (num === wantedNum) {
            counter++;
        }
    }

    console.log(`Number ${wantedNum} occurs ${counter} times.`);

}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);