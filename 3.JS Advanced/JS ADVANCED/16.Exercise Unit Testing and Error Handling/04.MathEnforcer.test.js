const mathEnforcer = require('./04.MathEnforcer.js');
const { expect } = require('chai');

describe('Test functionality of the object mathEnforcer', () => {
    it('test existing of methods', () => {
        expect(typeof mathEnforcer).to.be.equal('object')
        expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
        expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
    });
    it('test addFive method', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
        expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
        expect(mathEnforcer.addFive('0')).to.be.undefined;
        expect(mathEnforcer.addFive('string')).to.be.undefined;
        expect(mathEnforcer.addFive([1, 2, 3])).to.be.undefined;
        expect(mathEnforcer.addFive()).to.be.undefined;
    });
    it('test subtractTen method', () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        expect(mathEnforcer.subtractTen(5.5)).to.be.equal(-4.5);
        expect(mathEnforcer.subtractTen('0')).to.be.undefined;
        expect(mathEnforcer.subtractTen('string')).to.be.undefined;
        expect(mathEnforcer.subtractTen([1, 2, 3])).to.be.undefined;
        expect(mathEnforcer.subtractTen()).to.be.undefined;
    });
    it('test sum method', () => {
        expect(mathEnforcer.sum(2, 3)).to.be.equal(5);
        expect(mathEnforcer.sum(2.5, 3)).to.be.equal(5.5);
        expect(mathEnforcer.sum(2, 3.5)).to.be.equal(5.5);        
        expect(mathEnforcer.sum(-2, 3)).to.be.equal(1);        
        expect(mathEnforcer.sum(2, -3)).to.be.equal(-1);        
        expect(mathEnforcer.sum('0', 1)).to.be.undefined;
        expect(mathEnforcer.sum(0, '1')).to.be.undefined;
        expect(mathEnforcer.sum('string', 1)).to.be.undefined;
        expect(mathEnforcer.sum(1, 'string')).to.be.undefined;
        expect(mathEnforcer.sum([1, 2, 3], 1)).to.be.undefined;
        expect(mathEnforcer.sum(1, [1, 2, 3])).to.be.undefined;
        expect(mathEnforcer.sum(1)).to.be.undefined;
        expect(mathEnforcer.sum('1')).to.be.undefined;
        expect(mathEnforcer.sum('asd')).to.be.undefined;
        expect(mathEnforcer.sum([1, 2])).to.be.undefined;
        expect(mathEnforcer.sum()).to.be.undefined;
    });
})