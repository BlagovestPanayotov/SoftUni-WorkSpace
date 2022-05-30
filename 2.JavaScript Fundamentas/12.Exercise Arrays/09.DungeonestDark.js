function dungeonestDark(input) {
    let inputAsString = input[0];
    let health = 100;
    let inputArray = [];
    let elementArray = '';

    for (let i = 0; i < inputAsString.length; i++) {
        if (inputAsString[i] === ' ' || inputAsString[i] === '|') {
            inputArray.push(elementArray);
            elementArray = '';
            continue;
        }
        elementArray += inputAsString[i];
    }
    inputArray.push(elementArray);

    let coins = 0;
    let roomCount = 0;
    let isDead = false;
    for (let i = 0; i < inputArray.length; i += 2) {
        roomCount++;
        if (inputArray[i] === 'chest') {
            coins += Number(inputArray[i + 1]);
            console.log(`You found ${Number(inputArray[i + 1])} coins.`);
        } else if (inputArray[i] === 'potion') {
            health += Number(inputArray[i + 1]);

            if (health > 100) {
                let addedHealth = 100 - (health - Number(inputArray[i + 1]));
                console.log(`You healed for ${addedHealth} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${Number(inputArray[i + 1])} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else {
            health -= Number(inputArray[i + 1]);
            if (health <= 0) {
                console.log(`You died! Killed by ${inputArray[i]}.`);
                console.log(`Best room: ${roomCount}`);
                isDead = true;
                break;
            } else {
                console.log(`You slayed ${inputArray[i]}.`);
            }
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('--------------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
