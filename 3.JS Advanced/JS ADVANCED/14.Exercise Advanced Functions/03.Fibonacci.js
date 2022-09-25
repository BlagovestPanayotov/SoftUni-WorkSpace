function getFibonator() {
    let num = 0;
    let nextNum = 1;
    let sum = 0;
    return function () {
        sum = num + nextNum;
        num = nextNum;
        nextNum = sum;
        return num
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
