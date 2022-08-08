function starEnigma(input) {

    let regexp = /[s,t,a,r]/gi

    let messagesCount = Number(input.shift());

    let planets = {};

    for (let i = 0; i < messagesCount; i++) {

        let currentMessage = input[i];
        let dectyptNum = currentMessage.match(regexp).length;

        let message = '';
        for (let char of currentMessage) {
            message += String.fromCharCode(char.charCodeAt(0) - dectyptNum);
        }

        let messageRegexp = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*?:(?<population>\d+)[^@\-!:>]*?!(?<attackType>[AD])![^@\-!:>]*?-\>(?<soldierCount>\d+)/g

        let messageElements = messageRegexp.exec(message);
        if (messageElements) {
            let name = messageElements.groups.planetName;
            let population = messageElements.groups.population;
            let attackType = messageElements.groups.attackType == 'A' ? 'Attacked' : 'Destroyed';
            let soldierCount = messageElements.groups.soldierCount;

            planets[name] = {
                population: population,
                attackType: attackType,
                soldierCount: soldierCount,
            }
        }
    }

    let sorted = Object.entries(planets).sort((a, b) => {
        return (a[1].attackType).localeCompare(b[1].attackType) || a[0].localeCompare(b[0]);
    });

    let attackPlanets = [];
    let destroyedPlanets = [];
    
    for (let [planet, info] of sorted) {
        if(info.attackType==='Attacked'){
            attackPlanets.push(planet);
        }else{
            destroyedPlanets.push(planet);
        }
    }

    console.log(`Attacked planets: ${attackPlanets.length}`);
    for(let planet of attackPlanets){
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    for(let planet of destroyedPlanets){
        console.log(`-> ${planet}`);
    }


}


starEnigma(['3',
    'STCDoghudd3',
    'EHfsytsnhf?8555&I&2C9555SR']);
console.log('-'.repeat(16));
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);
