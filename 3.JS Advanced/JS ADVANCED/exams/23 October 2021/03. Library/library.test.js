const library = require('./library.js');
const { expect } = require('chai');


describe('library', function () {
    describe('calcPriceOfBook', function () {
        it('invalidInput', function () {
            expect(() => library.calcPriceOfBook(1990, 'Pod Igoto')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(['Pod', 'Igoto'], 1990)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto', [1990])).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(null, 1990)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto', null)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(true, 1990)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto', true)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(NaN, 1990)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto', NaN)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1990)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto', undefined)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook()).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Pod Igoto', 19.90)).to.throw(Error, 'Invalid input');
            // expect(()=>library.calcPriceOfBook('Pod Igoto',-1990)).to.throw(Error,'Invalid input');
            // expect(()=>library.calcPriceOfBook('',1990)).to.throw(Error,'Invalid input');
        });
        it('returns the correct price for year after 1980', function () {
            expect(library.calcPriceOfBook('Pod Igoto', 1990)).to.be.equal('Price of Pod Igoto is 20.00');
            expect(library.calcPriceOfBook('Anton and Dotty', 2000)).to.be.equal('Price of Anton and Dotty is 20.00');
            expect(library.calcPriceOfBook('Tom Soier', 1981)).to.be.equal('Price of Tom Soier is 20.00');
        });
        it('returns the correct price for year before or 1980', function () {
            expect(library.calcPriceOfBook('Pod Igoto', 1980)).to.be.equal('Price of Pod Igoto is 10.00');
            expect(library.calcPriceOfBook('Anton and Dotty', 1600)).to.be.equal('Price of Anton and Dotty is 10.00');
            expect(library.calcPriceOfBook('Tom Soier', 1)).to.be.equal('Price of Tom Soier is 10.00');
        });
    });
    describe('findBook', function () {
        it('the book array is an empty string', function () {
            expect(() => library.findBook([], "Troy")).to.throw(Error, 'No books currently available');

        });
        it('the desired book is present', function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.be.equal('We found the book you want.');
            expect(library.findBook(["Troy"], "Troy")).to.be.equal('We found the book you want.');
        });
        it('the desired book is NOT present', function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Pod Igoto")).to.be.equal('The book you are looking for is not here!');
            expect(library.findBook(["Troy"], "Pod Igoto")).to.be.equal('The book you are looking for is not here!');
        });
    });
    describe('arrangeTheBooks', function () {
        it('invalid input', function () {
            expect(() => library.arrangeTheBooks('5')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks([5])).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(5.8)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(-5)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(true)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(NaN)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(undefined)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks()).to.throw(Error, 'Invalid input');
        });
        it('there is room the shelf', function () {
            expect(library.arrangeTheBooks(5)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });
        it('there is room on the shelf', function () {
            expect(library.arrangeTheBooks(100)).to.be.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(50)).to.be.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        })
    });
});