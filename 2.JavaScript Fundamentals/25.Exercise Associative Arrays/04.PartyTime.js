function partyTime(input) {

    let guestListRegular = [];
    let guestListVIP = [];

    let guest = input.shift();
    while (guest !== 'PARTY') {
        if (isNaN(Number(guest[0]))) {
            guestListRegular.push(guest);
        } else {
            guestListVIP.push(guest);
        }
        guest = input.shift();
    }

    input.forEach(guest => {
        if (guestListRegular.includes(guest)) {
            let index = guestListRegular.indexOf(guest);
            guestListRegular.splice(index, 1);
        }
        if (guestListVIP.includes(guest)) {
            let index = guestListVIP.indexOf(guest);
            guestListVIP.splice(index, 1);
        }
    });

    console.log(guestListRegular.length + guestListVIP.length);
    guestListVIP.forEach(x => console.log(x));
    guestListRegular.forEach(x => console.log(x));


}



partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NooBUajQ',
    'Ce8vwPmE',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
