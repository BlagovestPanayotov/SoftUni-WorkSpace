function deserializeString(input) {

    let output = [];
    let indexOfInput = 0;
    line = input[indexOfInput++];

    while (line !== 'end') {

        let letter = line[0];
        line=line.replace(':','/');
        line = line.split('/');
        for (let i = 1; i < line.length; i++) {
            let index = Number(line[i]);
            output[index] = letter;
        }

        line = input[indexOfInput++];

    }

    console.log(output.join(''));

}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);