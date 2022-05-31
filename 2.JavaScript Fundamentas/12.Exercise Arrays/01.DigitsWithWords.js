function digitsWithWords(input){
    let num = Number(input[input.length-1]);
    
    let output = [];
    for (let index = 0; index < input.length-1; index+=num) {
        const element = input[index];
        output.push(element);        
    }

    console.log(output.join(' '));
    
}
digitsWithWords(['5', '20', '31', '4', '20', '2']);
console.log('-------------');
digitsWithWords(['dsa', 'asd', 'test', 'test', '2']);
console.log('-------------');
digitsWithWords(['1', '2', '3', '4', '5', '6']);
