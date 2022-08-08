function wildZoo(input) {

    let animals = {};
    let areas = {};

    let commands = {
        'Add': (animals, ares, name, food, area) => {

            if (animals.hasOwnProperty(name)) {
                animals[name].food += Number(food);
            } else {
                animals[name] = {
                    food: Number(food),
                    area: area,
                }
                if (areas.hasOwnProperty(area)) {
                    areas[area] += 1;
                } else {
                    areas[area] = 1;
                }
            }

        },
        'Feed': (animals, ares, name, food) => {
            if (animals.hasOwnProperty(name)) {
                animals[name].food -= Number(food);
                if (animals[name].food <= 0) {
                    areas[animals[name].area] -= 1;
                    delete animals[name];
                    console.log(`${name} was successfully fed`);
                }
            }
        },
    }

    let index = 0;
    let line;

    while ((line = input[index++]) !== 'EndDay') {

        let tokens = line.replace(': ', '-').split('-');

        commands[tokens[0]](animals, areas, tokens[1], tokens[2], tokens[3]);

    }

    console.log('Animals:');
    for (let animal in animals) {
        console.log(` ${animal} -> ${animals[animal].food}g`);
    }
    console.log('Areas with hungry animals:');
    for (let area in areas) {
        if (areas[area] > 0) {
            console.log(`${area}: ${areas[area]}`);
        }
    }

}
wildZoo(["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"]);
console.log('------------------------');
wildZoo(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"]);
console.log('------------------------');
wildZoo(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"]);