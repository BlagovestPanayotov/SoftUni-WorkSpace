function santaCookies(input) {

    let neededBatches = Number(input.shift());
    let countBoxes = 0;
    for (let i = 0; i < neededBatches; i++) {
        let flourCum = Number(input.shift()) / 140;
        let sugarScoope = Number(input.shift()) / 20;
        let cocoaScoope = Number(input.shift()) / 10;
        let totalCookiesPerBake = (140 + 10 + 20) * Math.floor(Math.min(flourCum, sugarScoope, cocoaScoope)) / 25;

        let boxes = Math.floor(totalCookiesPerBake / 5);
        if (boxes > 0) {
            console.log(`Boxes of cookies: ${boxes}`);
            countBoxes+=boxes;
        }else{
            console.log('Ingredients are not enough for a box of cookies.');
        }
    }

    console.log(`Total boxes: ${countBoxes}`);

}
santaCookies([2,
    200,
    300,
    500,
    100,
    200,
    50]);
console.log('------------------------');
santaCookies([1,
    1400,
    200,
    100]);