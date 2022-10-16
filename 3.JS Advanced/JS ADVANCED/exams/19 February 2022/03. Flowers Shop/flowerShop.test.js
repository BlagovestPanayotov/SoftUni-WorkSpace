const flowerShop = require('./flowerShop.js');
const { expect } = require('chai');

describe('flowerShop', function () {
    describe('calcPriceOfFlowers', function () {
        it('invalid inputs', function () {
            expect(() => flowerShop.calcPriceOfFlowers(10, 'rose', 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10.5, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, 10.5)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(10, 10, 'rose')).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', '10', 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, '10')).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', '10', '10')).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(['rose'], 10, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', [10], 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, [10])).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(true, 10, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', true, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, true)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 10, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', undefined, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, undefined)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(null, 10, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', null, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, null)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(NaN, 10, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', NaN, 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10, NaN)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 10)).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose')).to.be.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers()).to.be.throw(Error, 'Invalid input!');

        });
        it('valid inputs', function () {
            expect(flowerShop.calcPriceOfFlowers('rose', 10, 10)).to.be.equal('You need $100.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 10, 0)).to.be.equal('You need $0.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 10)).to.be.equal('You need $0.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 0)).to.be.equal('You need $0.00 to buy rose!');
            expect(flowerShop.calcPriceOfFlowers('', 10, 10)).to.be.equal('You need $100.00 to buy !');
        });
    });
    describe('checkFlowersAvailable', function () {
        it('availability of flowers', function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('rose', ["Rose", "Lily", "Orchid"])).to.be.equal('The rose are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Rose", "Orchid"])).to.be.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('rose',[])).to.be.equal('The rose are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('', ["Rose", "Lily", "Orchid"])).to.be.equal('The  are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose"])).to.be.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('Rose', ["Orchid"])).to.be.equal('The Rose are sold! You need to purchase more!');            
        });
    });
    describe('sellFlowers', function () {
        it('invalid inputs', function () {
            expect(()=>flowerShop.sellFlowers(2,["Rose", "Lily", "Orchid"])).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],[2])).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],'2')).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers('"Rose", "Lily", "Orchid"',2)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(NaN,2)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],NaN)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(null,2)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],null)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(undefined,2)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],undefined)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(true,2)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],true)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"])).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers()).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2.2)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-1)).to.throw(Error,'Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5)).to.throw(Error,'Invalid input!');
        });
        it('valid input', function(){
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2)).to.be.equal('Rose / Lily');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0)).to.be.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).to.be.equal('Rose / Orchid');
        })
    });
});

