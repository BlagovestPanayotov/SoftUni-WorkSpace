function printDNA(input) {

    let sequence = 'ATCGTTAGGG';

    let index = 0;
    let counter = 1;

    for (let i = 0; i < input; i++) {
        let element1 = sequence[index++];
        if (index == sequence.length) {
            index = 0;
        }
        let element2 = sequence[index++];
        if (index == sequence.length) {
            index = 0;
        }

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
    }
    
}



printDNA(4);
console.log('-----------------');
printDNA(10)