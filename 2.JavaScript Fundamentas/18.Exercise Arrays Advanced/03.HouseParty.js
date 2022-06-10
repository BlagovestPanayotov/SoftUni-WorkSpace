function houseParty(input) {

    let list = [];

    for (let command of input) {
        command = command.split(' ');
        let guestName = command[0];

        if (command[2] === 'not') {
            removeGuest(list, guestName);
        } else {
            addGuest(list, guestName);
        }
        
    }

    console.log(list.join('\n'));

    function removeGuest(list, guestName){
        if (list.includes(guestName)) {
            let index = list.indexOf(guestName);
            list.splice(index, 1);
        } else {
            console.log(`${guestName} is not in the list!`);
        }
    }

    function addGuest(list, guestName){
        if (list.includes(guestName)) {
            console.log(`${guestName} is already in the list!`);
        } else {
            list.push(guestName);
        }
    }

}





houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);
