function juiceFlavors(arr) {
    const juiceFlavorsContainer = {};
    const juiceFlavorsBottles = new Map();

    arr.forEach(line => {
        const [flavour, quantity] = line.split(' => ');
        if (!juiceFlavorsContainer.hasOwnProperty(flavour)) {
            juiceFlavorsContainer[flavour] = 0;
        }
        juiceFlavorsContainer[flavour] += Number(quantity);
        if (juiceFlavorsContainer[flavour] >= 1000) {
            const bottles = Math.floor(juiceFlavorsContainer[flavour] / 1000);
            juiceFlavorsContainer[flavour] = juiceFlavorsContainer[flavour] % 1000;

            if (!juiceFlavorsBottles.has(flavour)) {
                juiceFlavorsBottles.set(flavour, 0);
            }
            juiceFlavorsBottles.set(flavour, juiceFlavorsBottles.get(flavour) + bottles)
        }
    });

    for (const [flavour, quantity] of juiceFlavorsBottles) {
        console.log(`${flavour} => ${quantity}`);
    }

}

const output1 = juiceFlavors(
    ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']
);
console.log(output1);
const output2 = juiceFlavors(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
);
console.log(output2);
