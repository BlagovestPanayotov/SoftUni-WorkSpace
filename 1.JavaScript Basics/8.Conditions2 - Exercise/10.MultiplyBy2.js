function multiplyBy2(input) {
    let index = 0;
    let num = Number(input[index++]);
    while (num >= 0) {
        console.log(`Result: ${(num * 2).toFixed(2)}`);
        num = Number(input[index++]);
    }
    console.log("Negative number!");

}
multiplyBy2(['-20']);