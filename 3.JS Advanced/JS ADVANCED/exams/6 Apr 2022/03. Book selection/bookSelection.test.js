const bookSelection = require('./bookSelection.js');
const { expect } = require('chai');


describe('bookSelection', function () {
    describe('isGenreSuitable', function () {
        it('genre "Thriller" or "Horror" and the age is under or equal to 12', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.be.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.be.equal(`Books with Horror genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
        it('genre "Thriller" or "Horror" and the age is over 12', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 16)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 18)).to.be.equal('Those books are suitable');
        });
        it('genre is not "Thriller" or "Horror" with any age', function () {
            expect(bookSelection.isGenreSuitable('Cartoon', 10)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Comedy', 12)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Action', 18)).to.be.equal('Those books are suitable');
        });
    });
    describe('isItAffordable', function () {
        it('invalid inputs', function () {
            expect(() => bookSelection.isItAffordable('10', 10)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(10, '10')).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable([10, 10])).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable({ 10: 10 })).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(null, 10)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(10, null)).to.throws(Error, 'Invalid input');
            expect(bookSelection.isItAffordable(NaN, 10)).to.be.equal('Book bought. You have NaN$ left');
            expect(bookSelection.isItAffordable(10, NaN)).to.be.equal('Book bought. You have NaN$ left');
            expect(() => bookSelection.isItAffordable(10, undefined)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(undefined, 10)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(10, [10])).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable([10], 10)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable(10)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.isItAffordable()).to.throws(Error, 'Invalid input');
        });
        it('valid input - not enough money', function () {
            expect(bookSelection.isItAffordable(10, 5)).to.be.equal('You don\'t have enough money');
        });
        it('valid input - enough money', function () {
            expect(bookSelection.isItAffordable(10, 10)).to.be.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(10, 20)).to.be.equal('Book bought. You have 10$ left');
        });

    });
    describe('suitableTitles', function () {
        it('invalid inputs', function () {
            expect(() => bookSelection.suitableTitles('[{ title: "The Da Vinci Code", genre: "Thriller" }]', 'Thriller')).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles('Thriller', [{ title: "The Da Vinci Code", genre: "Thriller" }])).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(['Thriller'], [{ title: "The Da Vinci Code", genre: "Thriller" }])).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles({ title: "The Da Vinci Code", genre: "Thriller" }, 'Comedy')).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], null)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(null, 'Comedy')).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], NaN)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(NaN, 'Thriller')).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], undefined)).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(undefined, 'Thriller')).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }])).to.throws(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles()).to.throws(Error, 'Invalid input');
        });
        it('valid input', function () {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(["The Da Vinci Code"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "It", genre: "Thriller" }], 'Thriller')).to.deep.equal(["The Da Vinci Code", "It"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Mrs. Doubtfire", genre: "Comedy" }], 'Comedy')).to.deep.equal(["Mrs. Doubtfire"]);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Mrs. Doubtfire", genre: "Comedy" }], 'Cartoon')).to.deep.equal([]);
            expect(bookSelection.suitableTitles([], 'Cartoon')).to.deep.equal([]);

        });
    });
});