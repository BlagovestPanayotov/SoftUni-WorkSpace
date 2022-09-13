function solution(num) {

    function add(a,b){
        return a+b;
    }

    return add.bind(this,num);

}

// Acquire console
let add5 = solution(5);

console.log(add5(2))
console.log(add5(3))
// let add9=result(9);

// assert.equal(add9(2), 11, 'Printed wrong value.');
// assert.equal(add9(3), 12, 'Printed wrong value.');