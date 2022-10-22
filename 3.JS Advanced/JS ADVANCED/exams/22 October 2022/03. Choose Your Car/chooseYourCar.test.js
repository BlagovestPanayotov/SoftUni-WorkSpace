const chooseYourCar = require('./chooseYourCar.js');
const { expect } = require('chai');

describe('chooseYourCar', function () {
    describe('choosingType', function () {
        it('if the year is less than 1900 or more than 2022 throw an error', function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'Blue', 1899)).to.throw(Error, 'Invalid Year!');
            expect(() => chooseYourCar.choosingType('BMW', 'Red', 800)).to.throw(Error, 'Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'Yellow', 2023)).to.throw(Error, 'Invalid Year!');
            expect(() => chooseYourCar.choosingType('BMW', 'Green', 9999)).to.throw(Error, 'Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'Black', -1999)).to.throw(Error, 'Invalid Year!');
            expect(() => chooseYourCar.choosingType('BMW', 'Purple', -1999)).to.throw(Error, 'Invalid Year!');
        });
        it('if the value of the string type is different from Sedan throw an error', function () {
            expect(() => chooseYourCar.choosingType('BMW', 'Blue', 1999)).to.throw(Error, 'This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('sedan', 'Blue', 1999)).to.throw(Error, 'This type of car is not what you are looking for.');
        });
        it('If the year of the car is greater or equal to 2010 meets the requirements', function () {
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 2010)).to.be.equal('This Blue Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 2020)).to.be.equal('This Blue Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 2022)).to.be.equal('This Blue Sedan meets the requirements, that you have.');
        });
        it('if the above condition is not met', function () {
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 2009)).to.be.equal('This Sedan is too old for you, especially with that Blue color.');
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 1900)).to.be.equal('This Sedan is too old for you, especially with that Blue color.');
        });
    });
    describe('brandName', function () {
        it('remove a brand from the array that is located on the specified index', function () {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.be.deep.equal("Toyota, Peugeot");
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.be.deep.equal("BMW, Peugeot");
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.be.deep.equal("BMW, Toyota");
        });
        describe('testing invalid inputs', function () {
            it('input outside of the limits of the array', function () {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName([], 0)).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw(Error, 'Invalid Information!');
            });
            it('wrong input for the array', function () {
                expect(() => chooseYourCar.brandName("BMW, Toyota, Peugeot", -1)).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName("Peugeot", 3)).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName({ "Toyota": "Peugeot" }, 3)).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(100, 3)).to.throw(Error, 'Invalid Information!');
            });
            it('wrong input for the number', function () {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '0')).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [0])).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [])).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], { '0': 0 })).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 'zero')).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 'z')).to.throw(Error, 'Invalid Information!');
            });
            it('missing input', function () {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"])).to.throw(Error, 'Invalid Information!');
                expect(() => chooseYourCar.brandName()).to.throw(Error, 'Invalid Information!');
            });
        });
    });
    describe('carFuelConsumption calculate liters per 100 kilometers consumption', function () {
        it('if the liters/100km is less or equal to 7L', function () {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100.5, 7)).to.be.equal('The car is efficient enough, it burns 6.97 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 7.0001)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 6.999)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 4.222)).to.be.equal('The car is efficient enough, it burns 4.22 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 1)).to.be.equal('The car is efficient enough, it burns 1.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 0.5)).to.be.equal('The car is efficient enough, it burns 0.50 liters/100 km.', 'here');
        });
        it('if the liters/100km is more than 7L', function () {
            expect(chooseYourCar.carFuelConsumption(100, 7.1)).to.be.equal('The car burns too much fuel - 7.10 liters!');
            expect(chooseYourCar.carFuelConsumption(10.5, 7.0001)).to.be.equal('The car burns too much fuel - 66.67 liters!');
            expect(chooseYourCar.carFuelConsumption(100, 8.999)).to.be.equal('The car burns too much fuel - 9.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100, 100)).to.be.equal('The car burns too much fuel - 100.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100, 10.233)).to.be.equal('The car burns too much fuel - 10.23 liters!');
        });
        describe('testing invalid inputs', function () {
            it('test distanceInKilometers for negative numbers or zero', function () {
                expect(()=>chooseYourCar.carFuelConsumption(0,7)).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption(-100,7)).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption(-100.5,7)).to.throw(Error,'Invalid Information!');
            });
            it('test consumedFuelInLitres for negative numbers or zero', function () {
                expect(()=>chooseYourCar.carFuelConsumption(100,-7)).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption(100,0)).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption(100,-7.3)).to.throw(Error,'Invalid Information!');
            });
            it('test distanceInKilometers for invalid type', function () {
                expect(()=>chooseYourCar.carFuelConsumption('100', 7.1)).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption([100], 7.1)).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption('hundred', 7.1)).to.throw(Error,'Invalid Information!');
            });
            it('test consumedFuelInLitres for invalid type', function () {
                expect(()=>chooseYourCar.carFuelConsumption(100, '7')).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption(100, [7])).to.throw(Error,'Invalid Information!');
                expect(()=>chooseYourCar.carFuelConsumption(100, 'seven')).to.throw(Error,'Invalid Information!');
            });
            it('test for missing input',function(){
            expect(()=>chooseYourCar.carFuelConsumption(100)).to.be.throw(Error,'Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption()).to.be.throw(Error,'Invalid Information!');
            });
        });
    });
});

