const lookupChar = require('./03.CharLookup.js');
const { assert } = require('chai');

describe('test char lookup', () => {
    it('wrong type arguments as an input', () => {

        assert.equal(lookupChar(3, 'someString'), undefined, 'Swap arguments');
        assert.equal(lookupChar({ 3: 3 }, { 'someString': 'string' }), undefined, 'Objects as arguments');
        assert.equal(lookupChar([3], ['someString']), undefined, 'Arrays as arguments');
        assert.equal(lookupChar('string', [3]), undefined, 'Arrays as arguments');
        assert.equal(lookupChar(null, undefined), undefined, 'null and undefined arguments');
        assert.equal(lookupChar(undefined, null), undefined, 'null and undefined arguments');
        assert.equal(lookupChar(['a', 'b', 'c'], 1), undefined, 'array as first arguments');
    });
    it('input an object with key as a number', () => {
        assert.equal(lookupChar({ 3: 3 }, 3), undefined,);

    });
    it('second input number as a string', () => {
        assert.equal(lookupChar('Hello', '2'), undefined)
    })
    it('running the program without arguments', () => {
        assert.equal(lookupChar(), undefined);
    });
    it('empty string as an arguments', () => {
        assert.equal(lookupChar('', 0), "Incorrect index",);
        assert.equal(lookupChar('', ''), undefined,);
        assert.equal(lookupChar('Hello', ''), undefined,);
    });
    it('argument are passed as an array', () => {
        assert.equal(lookupChar(['string', 2]), undefined);
    });
    it('argument are passed as an object', () => {
        assert.equal(lookupChar({ 'string': 2 }), undefined);
    });
    it('argument are passed as a function', () => {
        assert.equal(lookupChar(() => { return 'str' }, () => { return 2 }), undefined);
    });
    it('index out of boundary', () => {
        assert.equal(lookupChar('someString', -1), "Incorrect index", 'Negative index can not be an input');
        assert.equal(lookupChar('someString', 25), "Incorrect index", 'The index can not be large or equal to the length');

    });
    it('Correct input', () => {
        assert.equal(lookupChar('testingString', 8), 't');
    });
    it('The boundary index as an input', () => {
        assert.equal(lookupChar('Hello', 4), 'o');
        assert.equal(lookupChar('Hello', 0), 'H');
    });
    it('The index as a floating point number', () => {
        assert.equal(lookupChar('hello',3.14),undefined);
    });
})