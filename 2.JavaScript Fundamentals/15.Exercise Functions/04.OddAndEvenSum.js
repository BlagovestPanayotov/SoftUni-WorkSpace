function oddAndEvenSum(num){

    console.log(`Odd sum = ${sumOddNumbers(num)}, Even sum = ${sumEvenNumbers(num)}`);

    function sumEvenNumbers(num){
        let numInString = String(num);
        let sum = 0;
        for(let num of numInString){
            let currentNum = Number(num);

            if(currentNum%2==0){
                sum+=currentNum;
            }
        }
        return sum;
    }
    function sumOddNumbers(num){
        let numInString = String(num);
        let sum = 0;
        for(let num of numInString){
            let currentNum = Number(num);
            if(currentNum%2!==0){
                sum+=currentNum;
            }
        }
        return sum;
    }

}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);