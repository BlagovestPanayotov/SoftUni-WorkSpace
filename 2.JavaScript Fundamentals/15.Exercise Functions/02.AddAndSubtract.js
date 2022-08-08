function addAndSubtract(numOne, numTwo, numThree) {


    let result = subtract(sum(numOne,numTwo),numThree);
    console.log(result);


    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }

    function subtract(numOne,numTwo){
        return numOne-numTwo;
    }

}
addAndSubtract(42, 58, 100);
