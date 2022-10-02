const isSymmetric = require('./05.CheckForSymmetry.js');
const { expect } = require('chai');
/*
    • Take an array as an argument
    • Return false for any input that isn’t of the correct type
    • Return true if the input array is symmetric
    • Otherwise, return false
*/
describe('Check for Symmetry', () => {
    it('Check if the argument is an Array', () => {
        expect(isSymmetric(5)).to.be.false;
        expect(isSymmetric('abccba')).to.be.false;
    });
    it('Symmetric arrays', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        expect(isSymmetric([1, 2, 1])).to.be.true;
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
    })
    it('empty array', () => {
        expect(isSymmetric([])).to.be.true;
    })
    it('different type', () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    })
    it('not symmetric arrays', () => {
        expect(isSymmetric([1,2,2,2])).to.be.false;
        expect(isSymmetric(['1','2','3'])).to.be.false;
    })
});