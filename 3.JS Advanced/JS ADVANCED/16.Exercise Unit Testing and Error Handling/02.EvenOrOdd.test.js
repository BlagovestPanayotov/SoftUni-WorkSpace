const isOddOrEven = require('./02.EvenOrOdd.js');
const { expect } = require('chai');

describe('Testing Even or Odd', () => {
    it('an even length as a input', () => {
        expect(isOddOrEven('I love JavaScript!')).to.be.equal('even');
    });
    it('an odd length as a input', () => {
        expect(isOddOrEven('I love UnitTesting!')).to.be.equal('odd');
    });
    it('without an input', () => {
        expect(isOddOrEven()).to.be.undefined;
    });
    it('number as an input', () => {
        expect(isOddOrEven(2345)).to.be.undefined;
    });
    it('null as an input', () => {
        expect(isOddOrEven(null)).to.be.undefined;
    });
    it('array as an input', () => {
        expect(isOddOrEven([2,3,4,5,'someElement'])).to.be.undefined;
    });
});