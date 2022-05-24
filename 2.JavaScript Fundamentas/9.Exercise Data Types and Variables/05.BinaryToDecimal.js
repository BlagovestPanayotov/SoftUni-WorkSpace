function binaryToDecimal(input) {
    let binaryString = String(input);

    let num = 0;
    let counter = 0;
    for (let i = binaryString.length-1; i >=0; i--) {
        let currentValue = Number(binaryString[i]);
        if(currentValue!==0){
            num+=Math.pow(2,counter);
        }
        counter++;
    }

    console.log(num);

}


binaryToDecimal(00001001);
