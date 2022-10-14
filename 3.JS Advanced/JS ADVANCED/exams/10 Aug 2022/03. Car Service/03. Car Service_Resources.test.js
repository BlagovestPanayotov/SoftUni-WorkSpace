const carService = require('./03. Car Service_Resources.js');
const { expect } = require('chai');

describe('casService', function () {
    describe('isItExpensive', function () {
        it('if the input is "Engine"', function () {
            expect(carService.isItExpensive('Engine')).to.be.equal('The issue with the car is more severe and it will cost more money');
        });
        it('if the input is "Transmission"', function () {
            expect(carService.isItExpensive('Transmission')).to.be.equal('The issue with the car is more severe and it will cost more money');
        });
        it('if the input is not "Engine" or "Transmission"', function () {
            expect(carService.isItExpensive('Windshield')).to.be.equal('The overall price will be a bit cheaper');
        });
    });
    describe('discount', function () {
        it('invalid input', function () {
            expect(() => carService.discount('3', 100)).to.throw(Error, 'Invalid input');
            expect(() => carService.discount(3, '100')).to.throw(Error, 'Invalid input');
        });
        it('items between 2 and 7 must make 15% discount', function () {
            expect(carService.discount(3, 100)).to.be.equal('Discount applied! You saved 15$');
            expect(carService.discount(5, 100)).to.be.equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).to.be.equal('Discount applied! You saved 15$');
        });
        it('items higher than 7 must make 15% discount', function () {
            expect(carService.discount(9, 100)).to.be.equal('Discount applied! You saved 30$');
        });
        it('for one or two items don\'t apply discount', function () {
            expect(carService.discount(2, 100)).to.be.equal('You cannot apply a discount');
            expect(carService.discount(1, 100)).to.be.equal('You cannot apply a discount');
            expect(carService.discount(0, 100)).to.be.equal('You cannot apply a discount');
        });
    });
    describe('partsToBuy', function () {
        describe('invalid input', function () {
            it('invalid input as objects', function () {
                expect(() => carService.partsToBuy({ part: 'banana', price: 200 }, ['banana'])).to.throw(Error, 'Invalid input');
                expect(() => carService.partsToBuy([{ part: 'banana', price: 200 }], { banana })).to.throw(Error, 'banana is not defined');

            });
            it('invalid input as strings', function () {
                expect(() => carService.partsToBuy("[{ part: 'banana', price: 200 }]", ['banana'])).to.throw(Error, 'Invalid input');
                expect(() => carService.partsToBuy([{ part: 'banana', price: 200 }], "['banana']")).to.throw(Error, 'Invalid input');

            });
            it('invalid input as numbers', function () {
                expect(() => carService.partsToBuy(200, ['banana'])).to.throw(Error, 'Invalid input');
                expect(() => carService.partsToBuy([{ part: 'banana', price: 200 }], 200)).to.throw(Error, 'Invalid input');

            });
            it('invalid input as null', function () {
                expect(() => carService.partsToBuy(null, ['banana'])).to.throw(Error, 'Invalid input');
                expect(() => carService.partsToBuy([{ part: 'banana', price: 200 }], null)).to.throw(Error, 'Invalid input');

            });
            it('invalid input as undefined', function () {
                expect(() => carService.partsToBuy(undefined, ['banana'])).to.throw(Error, 'Invalid input');
                expect(() => carService.partsToBuy([{ part: 'banana', price: 200 }], undefined)).to.throw(Error, 'Invalid input');

            });
            it('not enough parameters', function () {
                expect(() => carService.partsToBuy([{ part: 'banana', price: 200 }],)).to.throw(Error, 'Invalid input');
                expect(() => carService.partsToBuy()).to.throw(Error, 'Invalid input');

            });

        });
        describe('valid input', function () {
            it('both parameters have same length', function () {
                expect(carService.partsToBuy([{ part: 'banana', price: 200 }], ['banana'])).to.be.equal(200);
                expect(carService.partsToBuy([{ part: 'banana', price: 200 }], ['orange'])).to.be.equal(0);
                expect(carService.partsToBuy([{ part: 'banana', price: 200 }, { part: 'orange', price: 100 }], ['orange', 'banana'])).to.be.equal(300);
            });
            it('parameters have different length', function () {
                expect(carService.partsToBuy([{ part: 'banana', price: 200 }, { part: 'orange', price: 100 }], ['orange'])).to.be.equal(100);
                expect(carService.partsToBuy([{ part: 'banana', price: 200 }], ['orange', 'banana'])).to.be.equal(200);

            });
            it('empty strings as parameters', function () {
                expect(carService.partsToBuy([], ['orange', 'banana'])).to.be.equal(0);
                expect(carService.partsToBuy([{ part: 'banana', price: 200 }], [])).to.be.equal(0);
            })
        })
    })
    
});