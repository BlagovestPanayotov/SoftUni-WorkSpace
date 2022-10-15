const rentCar = require('./rentCar.js');
const { expect } = require('chai');

describe('rentCar', function () {
    describe('searchCar', function () {
        it('invalid input', function () {
            expect(() => rentCar.searchCar('Volkswagen, BMW, Audi', "BMW")).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], ["BMW"])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(12, "BMW")).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 10)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(null, "BMW")).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], null)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(undefined, "BMW")).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar()).to.throw(Error, 'Invalid input!');
        });
        it('no match element', function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Mercedes")).to.throw(Error, 'There are no such models in the catalog!');
        });
        it('correct input', function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW")).to.be.equal('There is 1 car of model BMW in the catalog!');
            expect(rentCar.searchCar(["Volkswagen", "BMW", "BMW", "Audi", "BMW"], "BMW")).to.be.equal('There is 3 car of model BMW in the catalog!');
        });

    });
    describe('calculatePriceOfCar', function () {
        it('invalid input', function () {
            expect(() => rentCar.calculatePriceOfCar(10, 10)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('10', '10')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', [10])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(['BMW'], 10)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(null, 10)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', null)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, 10)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(true, 10)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', true)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar()).to.throw(Error, 'Invalid input!');
        });
        it('no match element', function () {
            expect(() => rentCar.calculatePriceOfCar('Reno', 10)).to.throw(Error, 'No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('Ford', 10)).to.throw(Error, 'No such model in the catalog!');
        });
        it('correct input', function () {
            expect(rentCar.calculatePriceOfCar('BMW', 10)).to.be.equal('You choose BMW and it will cost $450!');
            expect(rentCar.calculatePriceOfCar('Toyota', 0)).to.be.equal('You choose Toyota and it will cost $0!');
        });

    });
    describe('checkBudget', function () {
        it('invalid input', function () {
            expect(() => rentCar.checkBudget('10', 10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, '10', 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10, '10')).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget([10], 10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, [10], 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10, [10])).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(null, 10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, null, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10, null)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(undefined, 10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, undefined, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10, undefined)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10.1, 10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10.1, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10, 10.1)).to.throw(Error,'Invalid input!');

            expect(() => rentCar.checkBudget(true, 10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, true, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10, true)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10, 10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget(10)).to.throw(Error,'Invalid input!');
            expect(() => rentCar.checkBudget()).to.throw(Error,'Invalid input!');
        });
        it('small budget', function () {
            expect(rentCar.checkBudget(10, 10, 10)).to.be.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(10, 10, 99)).to.be.equal('You need a bigger budget!');

        });
        it('correct input', function () {
            expect(rentCar.checkBudget(10, 10, 100)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 10, 1000)).to.be.equal('You rent a car!');
        });

    });
})