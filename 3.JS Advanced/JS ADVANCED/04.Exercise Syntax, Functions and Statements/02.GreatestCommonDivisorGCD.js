function greatestCommonDivider(num1, num2) {
    while (num1 !== num2) {
        num1 > num2 ? num1 -= num2 : num2 -= num1
    }
    console.log(num2);
}
greatestCommonDivider(15, 5);
greatestCommonDivider(2154, 458);
