function winningTicket(input) {

    let ticketPattern = /([^,\s]*([@#$^])\1{5,9}[^,\s]*)/g;
    let ticketValidatorPattern = /([@#$^])\1{5,9}/;

    input = input.split(/[,|\s]+[,|\s]+/g);
    for (let line of input) {
        if (line.length != 20) {
            if (line.length > 0) {
                console.log('invalid ticket');
            }
            continue;
        } else {
            let match = line.match(ticketPattern);
            if (match) {
                let leftHalfTicket = line.slice(0, 10);
                let rightHalfTicket = line.slice(-10);

                let leftMatch = ticketValidatorPattern.exec(leftHalfTicket);
                let rightMatch = ticketValidatorPattern.exec(rightHalfTicket);

                if (leftMatch) {
                    leftMatch = leftMatch.shift();
                    if (rightMatch) {
                        rightMatch = rightMatch.shift();
                        if (leftMatch === rightMatch) {
                            let winLenght = leftMatch.length;
                            if (winLenght < 10) {
                                console.log(`ticket "${line}" - ${winLenght}${leftMatch[0]}`);
                            } else {
                                console.log(`ticket "${line}" - ${winLenght}${leftMatch[0]} Jackpot!`);
                            }
                        } else {
                            console.log(`ticket "${line}" - no match`);
                        }
                    } else {
                        console.log(`ticket "${line}" - no match`);
                    }
                } else {
                    console.log(`ticket "${line}" - no match`);
                }

            } else {
                console.log(`ticket "${line}" - no match`);
            }
        }

    }
}




winningTicket(' ,Cash$$$$$$Ca$$$$$$sh ,');
console.log('-----------------------');
winningTicket('$$$$$$$$$$$$$$$$$$$$$$  , aabb  , thee@@@@@emo@@@@@eey');
console.log('-----------------------');
winningTicket('validticketnomatch:(');

