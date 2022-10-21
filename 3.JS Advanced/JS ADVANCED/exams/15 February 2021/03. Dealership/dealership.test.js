const dealership = require('./dealership.js');
const { expect } = require('chai');

describe('dealership', function () {
    describe('newCarCost', function () {
        it('input as an old/new car', function () {
            expect(dealership.newCarCost('Audi A4 B8', 15500)).to.be.equal(500);
            expect(dealership.newCarCost('Audi A6 4K', 20500)).to.be.equal(500);
            expect(dealership.newCarCost('Audi A8 D5', 25000)).to.be.equal(0);
            expect(dealership.newCarCost('Audi TT 8J', 13500)).to.be.equal(-500);
            expect(dealership.newCarCost('BMW', 10000)).to.be.equal(10000);
            expect(dealership.newCarCost('BMW', 0)).to.be.equal(0);
        });
    });
    describe('carEquipment', function () {
        it('test arrays', function () {
            expect(dealership.carEquipment(['heated seat', 'sliding roof', 'sport rims', 'navigation'], [1, 3]))
                .to.be.deep.equal(['sliding roof', 'navigation']);
            expect(dealership.carEquipment(['heated seat'], [0]))
                .to.be.deep.equal(['heated seat']);
            expect(dealership.carEquipment(['heated seat', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 2, 3]))
                .to.be.deep.equal(['heated seat', 'sliding roof', 'sport rims', 'navigation']);
            expect(dealership.carEquipment(['heated seat', 'sliding roof', 'sport rims', 'navigation'], [3, 2, 1, 0]))
                .to.be.deep.equal(['navigation', 'sport rims', 'sliding roof', 'heated seat']);
            expect(dealership.carEquipment(['heated seat', 'sliding roof', 'sport rims', 'navigation'], [2, 0]))
                .to.be.deep.equal(['sport rims','heated seat']);
        });
    });
    describe('euroCategory',function(){
        it('test eco', function(){
            expect(dealership.euroCategory(0)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(1)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(5)).to.be.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(6)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });
    });
    
});