class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        const index = this.plants.findIndex(x => x.plantName === plantName);
        if (index == -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[index].ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        this.plants[index].quantity += quantity;
        this.plants[index].ripe = true;

        return quantity == 1 ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`
    }

    harvestPlant(plantName) {
        const index = this.plants.findIndex(x => x.plantName == plantName);
        if (index == -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        
        if (!this.plants[index].ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        const quantity = this.plants[index].quantity;

        this.spaceAvailable += this.plants[index].spaceRequired;

        this.plants.splice(index, 1);
        this.storage.push({
            plantName,
            quantity,
        });

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        const output = [];
        const plantNamesOutput = [];
        output.push(`The garden has ${this.spaceAvailable} free space left.`);

        for (let plant of this.plants) {
            plantNamesOutput.push(plant.plantName);
        }

        output.push(`Plants in the garden: ${plantNamesOutput.join(', ')}`);

        if (this.storage.length == 0) {
            output.push('Plants in storage: The storage is empty.');
        } else {
            const plantsInTheStorage = [];
            for (let plant of this.storage) {
                plantsInTheStorage.push(`${plant.plantName} (${plant.quantity})`);
            }
            output.push(`Plants in storage: ${plantsInTheStorage.join(', ')}`);
        }

        return output.join('\n');

    }
}
