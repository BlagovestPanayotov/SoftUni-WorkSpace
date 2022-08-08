function palindromeIntegers(numbers) {

    for(let num of numbers){
        console.log(compareNumbers(num,reverceNumber(num)));
    }

    function compareNumbers(numOne,numTwo){
        if(numOne==numTwo){
            return true;
        }
        return false;
    }

    function reverceNumber(num) {
        return numInStringAsArr = Number(String(num)
            .split('')
            .reverse()
            .join(''));
    }

}
palindromeIntegers([123, 323, 421, 121]);
console.log('-------------');
palindromeIntegers([32, 2, 232, 1010]);
