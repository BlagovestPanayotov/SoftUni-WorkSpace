function manOWar(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);

    let maxHealth = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');

        if (command[0] === 'Fire') {
            let index = Number(command[1]);
            let damage = Number(command[2]);
            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    break;
                }
            }
        } else if (command[0] === 'Defend') {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            let damage = Number(command[3]);
            let hasSunken = false
            if (startIndex >= 0 && startIndex < pirateShip.length
                && endIndex >= 0 && endIndex < pirateShip.length) {
                for (let j = startIndex; j <= endIndex; j++) {
                    pirateShip[j] -= damage;
                    if (pirateShip[j] <= 0) {
                        hasSunken = true;
                        console.log('You lost! The pirate ship has sunken.');
                        break;
                    }
                }
            }
            if (hasSunken) {
                break;
            }
        } else if (command[0] === 'Repair') {
            let index = Number(command[1]);
            let health = Number(command[2]);
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
        } else if (command[0] === 'Status') {
            let maxHealth20Percent = maxHealth * 0.2;
            let counter = 0;
            for (let section of pirateShip) {
                if (section < maxHealth20Percent) {
                    counter++;
                }
            }
            console.log(`${counter} sections need repair.`);
        } else if (command[0] === 'Retire') {
            console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
            console.log(`Warship status: ${warShip.reduce((a, b) => a + b)}`);
            break;
        }


    }

}




manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);