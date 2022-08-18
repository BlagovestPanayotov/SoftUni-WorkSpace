function cookingByNumbers(num, op1, op2, op3, op4, op5) {

    let number = Number(num);
    let ops = [op1, op2, op3, op4, op5];

    let operations = {
        chop,
        dice,
        spice,
        bake,
        fillet,
    }

    for(let op of ops){
        number = operations[op](number);
        console.log(number);
    }


    function chop(number) {
        return number / 2;
    }
    function dice(number) {
        return Math.sqrt(number);
    }
    function spice(number) {
        return ++number;
    }
    function bake(number) {
        return number * 3;
    }
    function fillet(number) {
        return number * 0.8;
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');