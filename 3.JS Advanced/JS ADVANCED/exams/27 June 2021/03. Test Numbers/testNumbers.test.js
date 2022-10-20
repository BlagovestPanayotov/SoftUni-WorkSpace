const testNumbers = require('./testNumbers.js');
const { expect } = require('chai');

describe('testNumbers', function () {
    describe('sumNumber', function () {
        it('must return undefined with invalid input', function () {
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
            expect(testNumbers.sumNumbers([1, 1])).to.be.undefined;
            expect(testNumbers.sumNumbers([1], 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [1])).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(undefined, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers(1)).to.be.undefined;
            expect(testNumbers.sumNumbers()).to.be.undefined;
        });
        it('return the sum of two number rounded to the second dec. point', function () {
            expect(testNumbers.sumNumbers(1, 1)).to.be.equal('2.00');
            expect(testNumbers.sumNumbers(NaN, 1)).to.be.equal('NaN');
            expect(testNumbers.sumNumbers(1, NaN)).to.be.equal('NaN');
            expect(testNumbers.sumNumbers(0, 1)).to.be.equal('1.00');
            expect(testNumbers.sumNumbers(1, 0)).to.be.equal('1.00');
            expect(testNumbers.sumNumbers(0, 0)).to.be.equal('0.00');
            expect(testNumbers.sumNumbers(-3, 3)).to.be.equal('0.00');
            expect(testNumbers.sumNumbers(-3, -3)).to.be.equal('-6.00');
            expect(testNumbers.sumNumbers(0, -30)).to.be.equal('-30.00');
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.be.equal('3.00');
            expect(testNumbers.sumNumbers(1.333, 1.331)).to.be.equal('2.66');
            expect(testNumbers.sumNumbers(1.333, 1.339)).to.be.equal('2.67');
        });

    });
    describe('numberChecker', function () {
        it('the function returns info for the number', function () {
            expect(testNumbers.numberChecker('3')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('4')).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('4.4')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(4)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(4.4)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(-3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(-4)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(-4.4)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('0')).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('-3')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('-4')).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('-4.4')).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker([1])).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker([0])).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker([-1])).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker([-1.2])).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker([1.2])).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker([2])).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(null)).to.be.equal('The number is even!');
        });
        it('invalid input', function () {
            expect(() => testNumbers.numberChecker('one')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('1one')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('1,1')).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker()).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(NaN)).to.throw(Error, 'The input is not a number!');
        });
    });
    describe('averageSumArray', function () {
        it('test', function () {
            expect(testNumbers.averageSumArray([])).to.be.NaN;
            expect(testNumbers.averageSumArray([1,2,3,4,5])).to.be.equal(3);
            expect(testNumbers.averageSumArray(['1','2','3','4','5'])).to.be.equal(2469);
            expect(testNumbers.averageSumArray(['a','b'])).to.be.NaN;
            expect(testNumbers.averageSumArray(['ac','cc'])).to.be.NaN;
            expect(testNumbers.averageSumArray([1,2,3,4,5])).to.be.equal(3);
        });
    });
});