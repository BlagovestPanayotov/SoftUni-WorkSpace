function lettersChangeNumbers(input) {

    let sums = input.split(' ');

    for (let i = 0; i < sums.length; i++) {
        if (sums[i] === '') {
            sums.splice(i, 1);
            i--;
        }
    }

    let totalSum = 0;
    
    for (let str of sums) {
        let num = Number(str.slice(1, -1));
        let frontLetter = str[0];
        let backLetter = str[str.length - 1];
        num = frontAct(num,frontLetter);
        num = backAct(num,backLetter);

        totalSum += num;
        
    }
    
    console.log(totalSum.toFixed(2));
    
    function frontAct(num,letter){
        let testingLetter = letter.toLowerCase();
        if(testingLetter==letter){
            return num*(testingLetter.charCodeAt(0)-96);
        }else{
            return num/(testingLetter.charCodeAt(0)-96);
            
        }
    }
    
    function backAct(num,letter){
        let testingLetter = letter.toLowerCase();
        if(testingLetter==letter){
            return num+(testingLetter.charCodeAt(0)-96);
        }else{
            return num-(testingLetter.charCodeAt(0)-96);
            
        }
    }
    //Leters before:
    //-- Upper case -> divide
    //-- lower case -> multiple

    // Letters after:
    //-- Upper case -> substract
    //-- Lower case -> add

}


lettersChangeNumbers('A12b s17G');
console.log('-'.repeat(16));
lettersChangeNumbers('P34562Z q2576f   H456z');
console.log('-'.repeat(16));
lettersChangeNumbers('a1A');