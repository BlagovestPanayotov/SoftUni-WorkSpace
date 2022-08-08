function activationKeys(input) {

    let key = input.shift();

    let commands = {
        Slice,
        Flip,
        Contains,
    };

    while (input[0] != 'Generate') {
        let [command, tokenOne, tokenTwo, tokenThree] = input.shift().split('>>>');
        commands[command](tokenOne, tokenTwo, tokenThree);
    }

    console.log(`Your activation key is: ${key}`);

    function Slice(startIndex, endIndex) {
        //Slice>>>{startIndex}>>>{endIndex}
        let leftCut = key.slice(0,startIndex);
        let rightCut = key.slice(endIndex);

        key = leftCut+rightCut;

        console.log(key);

    }
    function Flip(flipWay, startIndex, endIndex) {
        let flipSubstr = key.slice(startIndex, endIndex);
        if (flipWay === 'Upper') {
            flipSubstr = flipSubstr.toUpperCase();
        } else {
            flipSubstr = flipSubstr.toLowerCase();
        }
        let leftCut = key.slice(0, startIndex);
        let rightCut = key.slice(endIndex);
        key = leftCut + flipSubstr + rightCut;
        console.log(key);
    }
    function Contains(substring) {
        if (key.includes(substring)) {
            console.log(`${key} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }

}


activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]));
console.log('-------------');
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));