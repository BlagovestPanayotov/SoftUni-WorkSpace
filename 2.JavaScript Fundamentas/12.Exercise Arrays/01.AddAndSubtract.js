function sumFirstAndLastArrayElements(numbers) {

    let newNums = [];
    let sumNumbers = 0;
    let sumNuwNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i];
        if (numbers[i] % 2 === 0) {
            newNums.push(numbers[i] + i);
            sumNuwNumbers += numbers[i] + i
        } else {
            newNums.push(numbers[i] - i);
            sumNuwNumbers += numbers[i] - i
        }
    }
    console.log('[ ' + newNums.join(', ') + ' ]');
    console.log(sumNumbers);
    console.log(sumNuwNumbers);


}
sumFirstAndLastArrayElements([5, 15, 23, 56, 35]);