function secretChat(input) {

    let message = input.shift();

    input.forEach(line => {
        if (line === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            return;
        }

        let [command, tokenOne, tokenTwo] = line.split(':|:');

        switch (command) {
            case 'InsertSpace':
                let leftCut = message.slice(0, Number(tokenOne));
                let rightCut = message.replace(leftCut, '');
                message = leftCut + ' ' + rightCut;
                console.log(message);
                break;
            case 'Reverse':
                if (message.includes(tokenOne)) {
                    message = message.replace(tokenOne, '') + tokenOne.split('').reverse().join('');
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                message = message.split(tokenOne).join(tokenTwo);
                console.log(message);
                break;
        }
    });

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log("-".repeat(166));
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);