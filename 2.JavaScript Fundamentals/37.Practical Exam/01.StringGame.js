function stringGame(input) {

    let str = input.shift();

    let commands = {
        Change,
        Includes,
        End,
        Uppercase,
        FindIndex,
        Cut,
    }

    let index = 0;
    let line;

    while ((line = input[index++]) !== 'Done') {
        let tokens = line.split(' ');
        str = commands[tokens[0]](str, tokens[1], tokens[2]);
    }

    function Change(str, char, replacement) {
        str = str.split(char).join(replacement);
        console.log(str);
        return str;
    }
    function Includes(str, substr) {
        if (str.includes(substr)) {
            console.log('True');
        } else {
            console.log('False');
        }
        return str;
    }
    function End(str, substr) {
        if (str.endsWith(substr)) {
            console.log('True');
        } else {
            console.log('False');
        }
        return str;
    }
    function Uppercase(str) {
        str = str.toUpperCase();
        console.log(str);
        return str;
    }
    function FindIndex(str, char) {
        console.log(str.indexOf(char));
        return str;
    }
    function Cut(str, startIndex, count) {
        str = str.substring(Number(startIndex), Number(count) + Number(startIndex));
        console.log(str);
        return str;
    }

}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
console.log('----------------');
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);