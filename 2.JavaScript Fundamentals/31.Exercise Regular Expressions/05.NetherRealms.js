function netherRealms(input) {

    let patternNames = /,\s*/g
    let patternDamage = /-?[0-9]+(\.?[0-9])*/g;
    let patternHealth = /[^+\-\*\.\/0-9]/g
    let multiplyPattern = /[\/\*]/g;

    let demons = {};

    let namesSeparaters = input.match(patternNames);
    if (namesSeparaters) {
        for (let separater of namesSeparaters) {
            input = input.replace(separater, ' ');
        }
    }
    let names = input.split(' ');

    for (let name of names) {

        if (name) {
            let health = 0;
            let damage = 0;
            let demonMatchHealth = name.match(patternHealth);
            let demonMatchDamage = name.match(patternDamage);
            let demonMathchMultiply = name.match(multiplyPattern);

            if (demonMatchHealth) {
                for (let char of demonMatchHealth) {
                    health += char.charCodeAt(0);
                }
            }

            if (demonMatchDamage) {
                for (let num of demonMatchDamage) {
                    damage += Number(num);
                }
            }

            if (demonMathchMultiply) {
                for (let symbol of demonMathchMultiply) {
                    if (symbol == '*') {
                        damage *= 2;
                    } else {
                        damage /= 2;
                    }
                }
            }

            demons[name] = {
                health: health,
                damage: damage.toFixed(2),
            }
        }
    }

    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (let token of sorted) {
        console.log(`${token[0]} - ${token[1].health} health, ${token[1].damage} damage`);
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('----------------------');
netherRealms('M3ph1st0**, Azazel,');
console.log('----------------------');
netherRealms('Gos/ho')