function solution() {

    let result = '';

    function append(str) {
        result += str;
    }
    function removeStart(num) {
        result = result.substring(num);
    }
    function removeEnd(num) {
        result = result.slice(0, -num);
    }
    function print() {
        console.log(result);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();