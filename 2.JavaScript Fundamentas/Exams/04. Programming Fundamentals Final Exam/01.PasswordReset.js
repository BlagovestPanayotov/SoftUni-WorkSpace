function passwordReset(input) {
    let password = input.shift();

    let index = 0;
    let line;
    while ((line = input[index++]) !== 'Done') {
        let [command, tokenOne, tokenTwo] = line.split(' ');
        if (command === 'TakeOdd') {
            let passwordHolder = ''
            for (let i = 1; i < password.length; i += 2) {
                passwordHolder += password[i];
            }
            password = passwordHolder;
            console.log(password);
        } else if (command === 'Cut') {
            let startIndex = Number(tokenOne);
            let lengthSubstr = Number(tokenTwo);
            let cutHolder = password.substring(startIndex, lengthSubstr + startIndex);
            password = password.replace(cutHolder, '');
            console.log(password);
        } else if (command === 'Substitute') {
            let oldSubstr = tokenOne;
            let newSubstr = tokenTwo;
            if (password.includes(oldSubstr)) {
                password = password.split(oldSubstr).join(newSubstr);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${password}`);
}
// passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"]));
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]));