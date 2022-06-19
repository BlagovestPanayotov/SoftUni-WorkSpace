function treasureHuntProblemDescription(input) {

    let treasure = input.shift().split('|');
    let index = 0;
    let commands = input[index++];

    while (commands !== "Yohoho!") {

        commands = commands.split(' ');
        commnad = commands.shift();

        switch (commnad) {
            case "Loot":
                for (let item of commands) {
                    if (!treasure.includes(item)) {
                        treasure.unshift(item);
                    }
                }
                break;
            case "Drop":
                let indexOfItem = Number(commands.shift());
                if (indexOfItem >= 0 && indexOfItem < treasure.length) {
                    let item = treasure.splice(indexOfItem, 1).pop();
                    treasure.push(item);
                }
                break;
            case "Steal":
                let count = Number(commands.shift());
                let steal = treasure.splice(-count);
                console.log(steal.join(', '));
                break;
        }


        commands = input[index++];
    }

    let countItems = treasure.length;
    if (countItems > 0) {
        let sumOfLength = 0;
        for (let item of treasure) {
            sumOfLength += item.length;
        }

        let pirateCredits = sumOfLength / countItems;

        console.log(`Average treasure gain: ${pirateCredits.toFixed(2)} pirate credits.`);
    }else{
        console.log("Failed treasure hunt.");
    }

}



// treasureHuntProblemDescription(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]);
treasureHuntProblemDescription(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);
