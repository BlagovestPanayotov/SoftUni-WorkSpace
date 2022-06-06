function numberModification(input){
    let numInString = String(input);

    let avarage = calculateAvarage(numInString);

    while(avarage<=5){
        numInString+=9;
        avarage = calculateAvarage(numInString);
    }

    console.log(numInString);

    function calculateAvarage(num){
        let sum = 0;
        for(let i=0;i<num.length;i++){
            sum+=Number(num[i]);
        }
        return sum/num.length;
    }

}
numberModification(101)
numberModification(5835)