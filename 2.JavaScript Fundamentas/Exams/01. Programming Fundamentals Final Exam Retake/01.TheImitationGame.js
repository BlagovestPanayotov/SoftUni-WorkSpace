function theImitationGame(input) {

    let message = input.shift();

    for (let line of input) {
        if (line === 'Decode') {
            return `The decrypted message is: ${message}`;
        }
        if (line.includes('Move')) {
            //    • Move {number of letters}":
            // ◦ Moves the first n letters to the back of the string
            // 'Move|3'
            line = line.replace('Move|', '');
            let frontCut = message.slice(0, Number(line));
            let backCut = message.replace(frontCut, '');

            message = backCut + frontCut;
        }
        if (line.includes('Insert')) {
            // • "Insert {index} {value}":
            // ◦ Inserts the given value before the given index in the string
            // 'Insert|2|o'
            line = line.split('|');
            let index = Number(line[1]);
            let value = line[2];
            let frontCut = message.slice(0, index);
            let backCut = message.slice(index);

            message = frontCut + value + backCut;
        }
        if (line.includes('ChangeAll')) {
            // • "ChangeAll {substring} {replacement}":
            // ◦ Changes all occurrences of the given substring with the replacement text
            // 'ChangeAll|z|l',

            line = line.split('|');

            let substring = line[1];
            let replacement = line[2];
            while(message.includes(substring)){
                message = message.replace(substring,replacement)
            }

        }
    }

}



console.log(theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']));
console.log('---------------------');
console.log(theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']));