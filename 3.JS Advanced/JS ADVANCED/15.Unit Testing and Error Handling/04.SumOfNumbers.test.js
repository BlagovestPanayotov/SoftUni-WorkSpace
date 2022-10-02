const { expect } = require('chai');
const sum = require('./04.sum.js');

describe('Sum testing', () => {
    it('sum numbers', () => {
        expect(sum([2, 3, 4, 5])).to.equal(14, 'the return sum is incorrect');
    });
    it('sum negative numbers', () => {
        expect(sum([-2, -3, -4, -5])).to.equal(-14, 'the return sum is incorrect');
    });
    it('sum floating point numbers', () => {
        expect(sum([2.1, 3.1, 4.3, 5.4])).to.equal(14.9, 'the return sum is incorrect');
    });
    it('empty array', () => {
        expect(sum([])).to.equal(0, 'the return sum is incorrect');
    });
    it('numbers as string', () => {
        expect(sum(['2', '3.4'])).to.equal(5.4, 'the return sum is incorrect');
    });
    it('number and a string', () => {
        expect(Number.isNaN(sum([2, 'banana']))).to.be.true;
    });
    it('number and an array', () => {
        expect(Number.isNaN(sum([2, [3, 4, 5]]))).to.be.true;
    });
    it('without a parameter', () => {
        expect(() => sum()).to.throw()
    });
    it('a number as parameter', () => {
        expect(() => sum(1)).to.throw()
    });
    it('a string as parameter', () => {
        const argument = [1,2,3];
        expect(argument).to.be.an('Array')
    });
})