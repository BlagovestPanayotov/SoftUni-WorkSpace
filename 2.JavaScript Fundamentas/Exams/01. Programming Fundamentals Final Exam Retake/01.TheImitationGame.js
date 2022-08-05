function theImitationGame(input) {
    let message = input.shift();

    let commands = {
        Move,
        Insert,
        ChangeAll,
    };
    
    for (let line of input) {

        if(line === 'Decode') break;

        let tokens = line.split('|');
        message = commands[tokens[0]](message,tokens[1],tokens[2]);
    }

    return `The decrypted message is: ${message}`;
    
    function Move(message,index){

        index = Number(index);

        let frontCut = message.slice(0, Number(index));
        let backCut = message.replace(frontCut, '');

        return backCut + frontCut;
    }
    function Insert(message,index,value){

        index = Number(index);

        let frontCut = message.slice(0, index);
        let backCut = message.slice(index);

        return frontCut + value + backCut;
    }
    function ChangeAll(message,substring,replacement){
    
        return message.split(substring).join(replacement);

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