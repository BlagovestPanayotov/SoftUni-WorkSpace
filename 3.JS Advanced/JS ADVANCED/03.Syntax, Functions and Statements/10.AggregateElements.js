function aggregateElements(input){

    console.log(sum(input));
    console.log(sumInverse(input));
    console.log(concat(input));



    function sum(nums){
        let result = 0;
        for(let num of nums){
            result += num;
        }
        return result;
    }

    function sumInverse(nums){
        let result = 0;
        for(let num of nums){
            result+= 1/num;
        }
        return result;
    }

    function concat(nums){
        let result = "";
        for(let num of nums){
            result += num;
        }
        return result;
    }

}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);