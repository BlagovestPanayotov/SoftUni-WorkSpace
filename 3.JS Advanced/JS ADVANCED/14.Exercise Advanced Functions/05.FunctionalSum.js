function add(n) {
    
    const summing = function (x) {
        n += x;
        return summing;
    }
    summing.toString = function () {
        return n;
    }
    return summing;

}

console.log(add(1).toString());