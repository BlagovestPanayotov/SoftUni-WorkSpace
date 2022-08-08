function inventory(input) {

    let heroesArr = [];

    for (let hero of input) {
        let [name,level,items] = hero.split(' / ');

        let currentHero = {
            name:name,
            level: Number(level),
            items: items,

        }
        heroesArr.push(currentHero);
    }

    let sortedByLevel = heroesArr.sort((a, b) => a.level - b.level);

    for (let hero of sortedByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}


// function inventory(input) {

//     class Hero {
//         constructor(name, level, items) {
//             this.name = name;
//             this.level = level;
//             this.items = items;
//         }
//     }

//     let heroesArr = [];

//     for (let hero of input) {
//         hero = hero.split(' / ');
//         let name = hero[0];
//         let level = Number(hero[1]);
//         let items = hero[2].split(', ');

//         heroesArr.push(new Hero(name, level, items));
//     }

//     heroesArr.sort((a, b) => a.level - b.level);

//     for (let hero of heroesArr) {
//         console.log(`Hero: ${hero.name}`);
//         console.log(`level => ${hero.level}`);
//         console.log(`items => ${hero.items.join(', ')}`);
//     }

// }



inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
