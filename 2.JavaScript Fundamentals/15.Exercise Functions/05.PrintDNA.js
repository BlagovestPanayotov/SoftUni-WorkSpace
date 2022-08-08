function printDNA(input) {

    let sequence = 'ATCGTTAGGG';

    let index = 0;
    let counter = 1;

    for (let i = 0; i < input; i++) {

        let element1 = sequence[index];
        index = indexCheck(index);

        let element2 = sequence[index];
        index = indexCheck(index);


        counter = printLine(counter,element1,element2);
        
    }

    function printLine(counter,element1,element2){
        if (counter == 1) {
            console.log(`**${element1}${element2}**`);
            counter++;
        } else if (counter == 2) {
            console.log(`*${element1}--${element2}*`);
            counter++;
        } else if (counter == 3) {
            console.log(`${element1}----${element2}`);
            counter++;
        } else if (counter == 4) {
            console.log(`*${element1}--${element2}*`);
            counter = 1;
        }
        return counter;
    }

    function indexCheck(index){
        index++;
        if (index == sequence.length) {
            index = 0;
        }
        return index;
    }
    
}



printDNA(4);
console.log('-----------------');
printDNA(10)