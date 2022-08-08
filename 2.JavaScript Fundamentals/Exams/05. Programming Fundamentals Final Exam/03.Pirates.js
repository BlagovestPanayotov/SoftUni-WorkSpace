function pirates(input) {

    let targets = {}
    let line;

    while ((line = input.shift()) !== 'Sail') {
        let [city, population, gold] = line.split('||');
        if (targets.hasOwnProperty(city) == false) {
            targets[city] = {
                population: 0,
                gold: 0,
            }
        }
        targets[city].population += Number(population);
        targets[city].gold += Number(gold);
    }

    let commands = {
        Plunder,
        Prosper,
    }

    while ((line = input.shift()) !== 'End') {
        let [command, town, tokenOne, tokenTwo] = line.split('=>');

        commands[command](town, tokenOne, tokenTwo);
    }

    let towns = Object.keys(targets);
    if (towns == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
        return;
    }
    console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
    for (let town in targets) {
        console.log(`${town} -> Population: ${targets[town].population} citizens, Gold: ${targets[town].gold} kg`);
    }

    function Plunder(town, people, gold) {
        targets[town].population -= Number(people);
        targets[town].gold -= Number(gold);
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        if (targets[town].population <= 0 || targets[town].gold <= 0) {
            console.log(`${town} has been wiped off the map!`);
            delete targets[town];
        }
    }

    function Prosper(town, gold) {
        gold = Number(gold);
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
            return;
        }
        targets[town].gold += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`);
    }

}
pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));
console.log('------------------');
pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]));