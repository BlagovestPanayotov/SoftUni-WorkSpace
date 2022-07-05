function partyTime(input) {

    let guestList = new Map();

    let guest = input.shift();
    while (guest !== 'PARTY') {
        if (isNaN(Number(guest[0]))) {
            guestList.set(guest, 'regular');
        } else {
            guestList.set(guest, 'VIP');
        }
        guest = input.shift();
    }

    input.forEach(guest => {
        if (guestList.has(guest)) {
            guestList.delete(guest);
        }
    });

    let missingPeople = Array.from(guestList.entries())
        .sort((a, b) => b[1].localeCompare(a[1]));

    console.log(missingPeople.length);
    missingPeople.forEach(guest => {
        console.log(guest[0]);
    })

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
