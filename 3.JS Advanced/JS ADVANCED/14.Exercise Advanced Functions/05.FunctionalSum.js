function add(num) {
    let sum = num;
    function summing(x) {
        sum+=x;
        return summing;
    }
    return summing().toString();

}

console.log(add(1)(6)(-3));