function autoEngineeringCompany(arr) {

    const carModels = new Map();

    arr.forEach(line => {
        const [brand, model, quantity] = line.split(' | ');
        if (!carModels.has(brand)) {
            carModels.set(brand, new Map);
        }
        if (!carModels.get(brand).has(model)) {
            carModels.get(brand).set(model, 0);
        }
        carModels.get(brand).set(model, carModels.get(brand).get(model) + Number(quantity));
    });

    for (const [brand, models] of carModels) {
        console.log(brand);
        for (const [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }

}

autoEngineeringCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'])