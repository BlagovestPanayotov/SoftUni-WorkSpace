function cardGame(input) {

    let players = new Map();

    input.forEach(element => {
        element = element.split(': ');
        let name = element[0];
        let cards = Array.from(new Set(element[1].split(', ')));
        if (!players.has(name)) {
            players.set(name, cards);
        } else {
            cards.forEach(card => {
                let playerCards = players.get(name);
                if (!playerCards.includes(card)) {
                    playerCards.push(card);
                    players.set(name, playerCards);
                }
            })
        }
    });

    for (let player of players) {
        let name = player[0];
        let cards = player[1];
        let cardsPower = 0;
        cards.forEach(card => {
            card = card.split('')
            let type = card.pop();
            let power = card.join('');
            

            if (isNaN(Number(power))) {
                switch (power) {
                    case 'J':
                        power = 11;
                        break;
                    case 'Q':
                        power = 12;
                        break;
                    case 'K':
                        power = 13;
                        break;
                    case 'A':
                        power = 14;
                        break;
                }
            } else {
                power = Number(power);
            }

            switch (type) {
                case 'S':
                    type = 4;
                    break;
                case 'H':
                    type = 3;
                    break;
                case 'D':
                    type = 2;
                    break;
                case 'C':
                    type = 1;
                    break;
            }

            cardsPower +=power*type;
        });
        console.log(`${name}: ${cardsPower}`);
    }


}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);