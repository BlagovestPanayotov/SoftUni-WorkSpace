function radioCrystals(input) {
    let watedSize = input.shift();
    for (let crystal = 0; crystal < input.length; crystal++) {
        let curentCristal = input[crystal];
        console.log(`Processing chunk ${curentCristal} microns`);
        cuttingCristal(curentCristal, watedSize);

    }

    function cuttingCristal(crystal, watedSize) {
        if (crystal / 4 >= watedSize) {
            crystal = cut(crystal, watedSize);
        }
        if (crystal * 0.8 >= watedSize) {
            crystal = lap(crystal, watedSize);
        }
        if (crystal - 20 >= watedSize) {
            crystal = grid(crystal, watedSize);
        }
        if (crystal > watedSize) {
            crystal = etch(crystal, watedSize);
        }
        if (crystal < watedSize) {
            crystal = xRay(crystal, watedSize);
        }
        console.log(`Finished crystal ${crystal} microns`);
    }
    
    function cut(crystal, watedSize) {
        let counter = 0;
        while (crystal / 4 >= watedSize) {
            counter++;
            crystal = crystal / 4;
        }
        console.log(`Cut x${counter}`);
        crystal = Math.floor(crystal);
        console.log('Transporting and washing');
        return crystal;
    }

    function lap(crystal, watedSize) {
        let counter = 0;
        while (crystal * 0.8 >= watedSize) {
            crystal = crystal * 0.8;
            counter++;
        }
        console.log(`Lap x${counter}`);
        crystal = Math.floor(crystal);
        console.log('Transporting and washing');
        return crystal;
    }

    function grid(crystal, watedSize) {
        let counter = 0;
        while (crystal - 20 >= watedSize) {
            crystal = crystal - 20;
            counter++;
        }
        console.log(`Grind x${counter}`);
        crystal = Math.floor(crystal);
        console.log('Transporting and washing');
        return crystal;
    }

    function etch(crystal, watedSize) {
        let counter = 0;
        while (crystal > watedSize) {
            crystal = crystal - 2;
            counter++;
        }
        console.log(`Etch x${counter}`);
        crystal = Math.floor(crystal);
        console.log('Transporting and washing');
        return crystal;
    }

    function xRay(crystal, watedSize) {
        let counter = 0;
        while (crystal < watedSize) {
            crystal++;
            counter++;
        }
        console.log(`X-ray x${counter}`);
        crystal = Math.floor(crystal);
        return crystal;
    }

}
radioCrystals([1375, 50000]);