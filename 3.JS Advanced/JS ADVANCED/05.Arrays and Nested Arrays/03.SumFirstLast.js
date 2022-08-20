function sumFirstLast(input) {
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);
    return firstElement + lastElement;
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);