const numberOperations = require('./03.numberOperations.js');
const { expect } = require('chai');

describe('numberOperations', function(){
    describe('powNumber', function(){
        it('giving power of two',function(){
            expect(numberOperations.powNumber(-1)).to.be.equal(1);
            expect(numberOperations.powNumber(0)).to.be.equal(0);
            expect(numberOperations.powNumber(1)).to.be.equal(1);
            expect(numberOperations.powNumber(1.3)).to.be.equal(1.6900000000000002);
            expect(numberOperations.powNumber(-1.1)).to.be.equal(1.2100000000000002);
            expect(numberOperations.powNumber(23123)).to.be.equal(534673129);
            expect(numberOperations.powNumber(-23123)).to.be.equal(534673129);
        })
    });
    describe('numberChecker', function(){
        it('happyPath',function(){
            expect(numberOperations.numberChecker([-10])).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(true)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-10)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker([0])).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-10.5)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(10.5)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99.99)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(null)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1123123)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100.00001)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('-10')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('0')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('-10.5')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('10.5')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99.99')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('1123123')).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100.00001')).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker([100])).to.be.equal('The number is greater or equal to 100!');


        });
        it('invalid input',function(){
            expect(()=>numberOperations.numberChecker('1a')).to.throw(Error,'The input is not a number!');
            expect(()=>numberOperations.numberChecker('a')).to.throw(Error,'The input is not a number!');
            expect(()=>numberOperations.numberChecker()).to.throw(Error,'The input is not a number!');
            expect(()=>numberOperations.numberChecker(['abc'])).to.throw(Error,'The input is not a number!');
            expect(()=>numberOperations.numberChecker(undefined)).to.throw(Error,'The input is not a number!');
            expect(()=>numberOperations.numberChecker()).to.throw(Error,'The input is not a number!');
        })
    });
    describe('sumArrays', function(){
        it('even arrays',function(){
            expect(numberOperations.sumArrays([1,2,3],[3,2,1])).to.be.deep.equal([4,4,4]);
            expect(numberOperations.sumArrays([1,2],[3,2])).to.be.deep.equal([4,4]);
            expect(numberOperations.sumArrays([1,2,3,2],[3,2,1,2])).to.be.deep.equal([4,4,4,4]);
            expect(numberOperations.sumArrays([1],[3])).to.be.deep.equal([4]);
            expect(numberOperations.sumArrays([1.1,2.1,3.1],[3.1,2.1,1.1])).to.be.deep.equal([4.2,4.2,4.2]);
            expect(numberOperations.sumArrays([1.1,2.1,3.1],[3,2,1])).to.be.deep.equal([4.1,4.1,4.1]);
            expect(numberOperations.sumArrays([1,2,3],[3.1,2.1,1.1])).to.be.deep.equal([4.1,4.1,4.1]);
            expect(numberOperations.sumArrays([-1,-2,-3],[3,2,1])).to.be.deep.equal([2,0,-2]);
            expect(numberOperations.sumArrays([1,2,3],[-3,-2,-1])).to.be.deep.equal([-2,0,2]);
            expect(numberOperations.sumArrays([-1,-2,-3],[-3,-2,-1])).to.be.deep.equal([-4,-4,-4]);
            expect(numberOperations.sumArrays([-1.1,-2.1,-3.1],[3,2,1])).to.be.deep.equal([ 1.9, -0.10000000000000009, -2.1 ]);
            expect(numberOperations.sumArrays([1,2,3],[-3.1,-2.1,-1.1])).to.be.deep.equal([ -2.1, -0.10000000000000009, 1.9 ]);
            expect(numberOperations.sumArrays([-1.1,-2.1,-3.1],[-3.1,-2.1,-1.1])).to.be.deep.equal([ -4.2, -4.2, -4.2 ]);
            expect(numberOperations.sumArrays([-1.1,-2.1,-3.1],[-3,-2,-1])).to.be.deep.equal([-4.1, -4.1, -4.1 ]);
            expect(numberOperations.sumArrays([-1,-2,-3],[-3.1,-2.1,-1.1])).to.be.deep.equal([-4.1, -4.1, -4.1 ]);
        });
        it('uneven arrays',function(){
            expect(numberOperations.sumArrays([1,2,3],[1,2])).to.be.deep.equal([2,4,3]);
            expect(numberOperations.sumArrays([1,2],[1,2,3])).to.be.deep.equal([2,4,3]);
            expect(numberOperations.sumArrays([-1,-2,-3],[1,2])).to.be.deep.equal([0,0,-3]);
            expect(numberOperations.sumArrays([1,2,3],[-1,-2])).to.be.deep.equal([0,0,3]);
            expect(numberOperations.sumArrays([1.1,2.1,3.1],[1,2])).to.be.deep.equal([2.1,4.1,3.1]);
            expect(numberOperations.sumArrays([1,2,3],[1.1,2.1])).to.be.deep.equal([2.1,4.1,3]);
            expect(numberOperations.sumArrays([-1.1,-2.1,-3.1],[1,2])).to.be.deep.equal([-0.10000000000000009,-0.10000000000000009,-3.1]);
            expect(numberOperations.sumArrays([1,2,3],[-1.1,-2.1])).to.be.deep.equal([-0.10000000000000009,-0.10000000000000009,3]);
            expect(numberOperations.sumArrays([0,0,0],[1,2])).to.be.deep.equal([1,2,0]);
            expect(numberOperations.sumArrays([1,2,3],[0,0])).to.be.deep.equal([1,2,3]);
            expect(numberOperations.sumArrays([],[1,2])).to.be.deep.equal([1,2]);
            expect(numberOperations.sumArrays([1,2],[])).to.be.deep.equal([1,2]);
            expect(numberOperations.sumArrays([],[])).to.be.deep.equal([]);
        })
    });
});