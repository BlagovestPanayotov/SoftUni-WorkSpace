function theHuntingGames(input) {

    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPP = Number(input.shift());
    let foodPP = Number(input.shift());

    let totalWater = waterPP * days * players;
    let totalFood = foodPP * days * players;

    let dayCount = 1;
    let isLost = false;
    for (let energyLost of input) {
        energyLost = Number(energyLost);
        if ((energy - energyLost) > 0) {
            energy -= energyLost;
            if (dayCount % 2 == 0) {
                energy *= 1.05;
                totalWater -= totalWater * 0.3;
            }
            if (dayCount % 3 == 0) {
                energy *= 1.1;
                totalFood -= (totalFood/players);
            }
        } else {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            isLost=true;
            break;
        }
        dayCount++;
    }

    if(!isLost){
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }



}

theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);
theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);