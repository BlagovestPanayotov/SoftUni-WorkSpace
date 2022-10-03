function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
console.log(sum('12345'))

module.exports = sum;