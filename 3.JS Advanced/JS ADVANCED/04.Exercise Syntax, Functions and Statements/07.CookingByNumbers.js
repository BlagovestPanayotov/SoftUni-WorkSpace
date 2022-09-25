function cookingByNumbers(num, ...ops) {

    let currentNum = Number(num);
    const operations = { chop, dice, spice, bake, fillet, }

    for (const op of ops) {
        currentNum = operations[op](currentNum);
        console.log(currentNum);
    }

    function chop(num) { return num / 2 };
    function dice(num) { return Math.sqrt(num) };
    function spice(num) { return num += 1 };
    function bake(num) { return num *= 3 };
    function fillet(num) { return num *= 0.8 };

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('--------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')