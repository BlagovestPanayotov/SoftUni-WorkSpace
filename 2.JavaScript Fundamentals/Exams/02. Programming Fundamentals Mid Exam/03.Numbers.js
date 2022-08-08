function numbers(input) {

    let numbers = input.split(' ').map(Number);

    let avarage = avarageNum(numbers);

    let numsGraterThanAvarage = findNumsGraterThanAvarage(numbers,avarage);

    if(numsGraterThanAvarage.length<1){
        console.log("No");
    }else{
        let output = numsGraterThanAvarage.slice(0,5);
        console.log(output.join(" "));
    }




    function avarageNum(numbers) {
        let sum = 0;
        for (let num of numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }

    function findNumsGraterThanAvarage(numbers,avarage){
        let newNums = numbers.map(x=>x);
        return newNums.sort((a, b) => b - a).filter(x=>x>avarage);
    }

}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');