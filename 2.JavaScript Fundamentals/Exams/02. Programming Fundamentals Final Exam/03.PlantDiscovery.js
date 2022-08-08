function plantDiscovery(input) {

    let startPlantCount = Number(input.shift());

    let plants = {};

    for (let i = 0; i < startPlantCount; i++) {
        let [name, rarity] = input.shift().split('<->');
        plants[name] = {
            rarity: Number(rarity),
            rating: [],
        }
    }

    for (let line of input) {
        if (line == "Exhibition") {
            break;
        }

        let [command, name, num] = line
            .replace(': ', '<>')
            .replace(' - ', '<>')
            .split('<>');

        if (plants.hasOwnProperty(name) === false) {
            console.log('error');
            continue;
        }

        if (command === 'Rate') {
            plants[name].rating.push(Number(num));
        } else if (command === 'Update') {
            plants[name].rarity = Number(num)
        } else if (command === 'Reset') {
            plants[name].rating = [];
        }

    }

    console.log('Plants for the exhibition:');
    for (let plant in plants) {

        let rates = plants[plant].rating.length;
        let avarageRating;
        if (rates == 0) {
            avarageRating = 0;
        } else {
            avarageRating = (plants[plant].rating.reduce((a, b) => a + b)) / rates;
        }

        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avarageRating.toFixed(2)}`);
    }

}
// plantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);