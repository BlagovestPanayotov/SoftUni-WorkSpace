function sumOfNumbers(input) {
    let num = input[0];
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);
        sum+=currentNum;
    }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumbers(["1234"]);