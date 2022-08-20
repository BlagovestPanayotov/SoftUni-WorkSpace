function biggerHalf(input){
    let myArr = input.slice().sort((a,b)=>b-a);
    let result = [];

    for(let i=0; i<myArr.length/2;i++){
        result.push(myArr[i]);
    }

    return result.reverse();
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6])