function distinctArray(input) {
    let output=[];
    for (let num of input) {
        if(!output.includes(num)){
            output.push(num);
        }
    }
    console.log(output.join(' '));

}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
