function treasureFinder(input) {

    let keys = input[0].split(' ').map(Number);

    let indexOfInput = 1;
    let line = input[indexOfInput++];

    while(line!=='find') {
        let index = 0;
        let output = "";
        for (let char of line) {
            let letter = String.fromCharCode(char.charCodeAt(0) - keys[index++]);
            output += letter;
            if (index == keys.length) index = 0;
        }
        let type = output.slice(output.indexOf('&')+1,output.lastIndexOf('&'));
        let coordinates = output.slice(output.indexOf('<')+1,output.lastIndexOf('>'));
        console.log(`Found ${type} at ${coordinates}`);
        line = input[indexOfInput++];
    }

}

treasureFinder(['1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find']);
console.log('-'.repeat(16));
treasureFinder(['1 4 2 5 3 2 1',
    "Ulgwh\"jt$ozfj!'kqqg(!bx\"A3U237GC",
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find']);