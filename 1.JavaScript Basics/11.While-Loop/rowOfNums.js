function rowOnNums(input) {

    let num = Number(input[0]);
    let n = 1;
    while (n <= num) {
        console.log(n);
        n = 2 * n + 1;
    }

}
rowOnNums(["17"]);