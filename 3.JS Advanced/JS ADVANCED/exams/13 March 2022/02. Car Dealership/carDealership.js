class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0
            || !Number.isInteger(horsepower)
            || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage,
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(x => x.model == model);
        if (index == -1) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = this.availableCars[index].price;
        const diff = this.availableCars[index].mileage - desiredMileage;

        if (diff > 40000) {
            soldPrice *= 0.9;
        } else if (diff > 0) {
            soldPrice *= 0.95;
        }

        this.soldCars.push({
            model: this.availableCars[index].model,
            horsepower: this.availableCars[index].horsepower,
            soldPrice,
        });

        this.availableCars.splice(index, 1);

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        const output = ['-Available cars:'];

        this.availableCars.forEach(x => {
            output.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);
        });

        return output.join('\n');

    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }
        const output = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
        ]

        const sorting = {
            horsepower: sortByHorsepower.bind(this),
            model: sortByModel.bind(this),
        }

        sorting[criteria](output);

        return output.join('\n');

        function sortByHorsepower(output) {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
                .forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
        }
        function sortByModel(output) {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
                .forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`));
        }
    }

}



//Testing currentCar

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar())

// assert.equal(dealership.currentCar(), 
// `-Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$`);