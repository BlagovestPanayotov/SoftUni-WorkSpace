function carWash(input) {
    let cleanessCar = 0;

    for (let action of input) {
        switch (action) {
            case 'soap':
                cleanessCar = soap(cleanessCar);
                break;
            case 'water':
                cleanessCar = water(cleanessCar);
                break;
            case 'vacuum cleaner':
                cleanessCar = vacuumCleaner(cleanessCar);
                break;
            case 'mud':
                cleanessCar = mud(cleanessCar);
                break;
        }
    }

    console.log(`The car is ${cleanessCar.toFixed(2)}% clean.`);

    function soap(cleaness) {
        cleaness += 10;
        cleaness = percentCheck(cleaness);
        return cleaness;
    }

    function water(cleaness) {
        cleaness = cleaness * 1.2;
        cleaness = percentCheck(cleaness);
        return cleaness;
    }

    function vacuumCleaner(cleaness) {
        cleaness = cleaness * 1.25;
        cleaness = percentCheck(cleaness);
        return cleaness;
    }

    function mud(cleaness) {
        cleaness = cleaness * 0.9
        return cleaness;
    }

    function percentCheck(cleaness) {
        if (cleaness > 100) {
            cleaness = 100;
        }
        return cleaness;
    }

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);