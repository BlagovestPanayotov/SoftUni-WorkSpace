function sumFirstAndLast(input) {
    if (input.length > 1) {
        let firstNum = Number(input.shift());
        let lastNum = Number(input.pop());
        console.log(firstNum + lastNum);
    } else {
        console.log(input.join(''));
    }
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);