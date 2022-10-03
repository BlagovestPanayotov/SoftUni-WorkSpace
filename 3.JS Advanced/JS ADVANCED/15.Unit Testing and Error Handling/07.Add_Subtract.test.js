const createCalculator = require('./07.Add_Subtract.js');
const { expect } = require('chai');

describe('test createCalculator module', () => {
    it('check if the function returns object', () => {
        const testingResult = createCalculator();
        expect(typeof testingResult).to.be.equal('object');
    });
    it('check existing of functionality', () => {
        const testingResult = createCalculator();
        expect(testingResult.hasOwnProperty('get')).to.be.true;
        expect(testingResult.hasOwnProperty('add')).to.be.true;
        expect(testingResult.hasOwnProperty('subtract')).to.be.true;
    });
    it('check calculation of floating point numbers', () => {
        const testingResult = createCalculator();
        testingResult.add(5.5);
        expect(testingResult.get()).to.be.equal(5.5, 'add functionality not exist');
        testingResult.subtract(7.5);
        expect(testingResult.get()).to.be.equal(-2, 'subtract functionality not exist');
    })
    it('check for string number input', () => {
        const testingResult = createCalculator();
        testingResult.add('5');
        expect(testingResult.get()).to.be.equal(5, 'add functionality not exist');
        testingResult.subtract('7');
        expect(testingResult.get()).to.be.equal(-2, 'subtract functionality not exist');
    });
    it('check for missing argument', () => {
        const testingResult = createCalculator();
        testingResult.add();
        expect(testingResult.get()).to.be.NaN;
        testingResult.subtract();
        expect(testingResult.get()).to.be.NaN;
    });
    it('check for string argument', () => {
        const testingResult = createCalculator();
        testingResult.add('banana');
        expect(testingResult.get()).to.be.NaN;
        testingResult.subtract('orange');
        expect(testingResult.get()).to.be.NaN;
    });
})