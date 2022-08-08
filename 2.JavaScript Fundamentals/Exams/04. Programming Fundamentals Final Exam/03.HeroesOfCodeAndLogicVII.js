function heroesOfCodeAndLogicVII(input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let [name, HP, MP] = input.shift().split(' ');
        heroes[name] = { hp: Number(HP), mp: Number(MP), isAlive: true };
    }

    let commands = {
        Heal,
        Recharge,
        TakeDamage,
        CastSpell,
        End,
    };

    while (input.length > 0) {
        let [command, name, tokenOne, tokenTwo] = input.shift().split(' - ');
        tokenOne = Number(tokenOne);
        commands[command](name, tokenOne, tokenTwo);
    }

    function End() {
        for (let hero in heroes) {
            /*
            {hero name}
            HP: {current HP}
            MP: {current MP}
            */
            if (heroes[hero].isAlive) {
                console.log(hero);
                console.log(`  HP: ${heroes[hero].hp}`);
                console.log(`  MP: ${heroes[hero].mp}`);
            }
        }
    }

    function Heal(name, potion) {
        if (heroes.hasOwnProperty(name)
            && heroes[name].isAlive) {
            let heal = Math.min((100 - heroes[name].hp), potion);
            heroes[name].hp += heal;
            console.log(`${name} healed for ${heal} HP!`);
        }

    }

    function Recharge(name, potion) {
        if (heroes.hasOwnProperty(name)
            && heroes[name].isAlive) {
            let mana = Math.min((200 - heroes[name].mp), potion);
            heroes[name].mp += mana;
            console.log(`${name} recharged for ${mana} MP!`);
        }
    }

    function TakeDamage(name, demage, attaker) {
        if (heroes.hasOwnProperty(name)
            && heroes[name].isAlive) {
            heroes[name].hp -= demage;
            if (heroes[name].hp > 0) {
                console.log(`${name} was hit for ${demage} HP by ${attaker} and now has ${heroes[name].hp} HP left!`);
            } else {
                heroes[name].hp = 0;
                heroes[name].isAlive = false;
                console.log(`${name} has been killed by ${attaker}!`);
            }
        }

    }

    function CastSpell(name, mana, spell) {
        if (heroes.hasOwnProperty(name)
            && heroes[name].isAlive) {
            if (mana > heroes[name].mp) {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            } else {
                heroes[name].mp -= mana;
                console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].mp} MP!`);
            }

        }
    }
}

// heroesOfCodeAndLogicVII(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End']);
heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 1 - Mosquito',
    'End']);