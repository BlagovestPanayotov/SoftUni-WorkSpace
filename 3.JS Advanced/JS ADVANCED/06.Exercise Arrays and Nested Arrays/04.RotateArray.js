function rotateArray(arr,rotations) {

    let myArr = arr.slice();

    for(let i=0;i<rotations;i++){
        myArr.unshift(myArr.pop())
    }

    console.log(myArr.join(' '));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);