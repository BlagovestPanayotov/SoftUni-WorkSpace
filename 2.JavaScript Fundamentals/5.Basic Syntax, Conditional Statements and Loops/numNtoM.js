function numNto1(numN, numM) {
    let big = numM >= numN ? numM : numN;
    let small = numM >= numN ? numN : numM;
    for(let a=big;a>=small;a--){
        console.log(a);
    }
}
numNto1(6, 2);
