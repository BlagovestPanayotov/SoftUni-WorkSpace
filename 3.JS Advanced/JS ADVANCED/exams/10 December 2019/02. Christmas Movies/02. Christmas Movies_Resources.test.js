const ChristmasMovies = require('./02. Christmas Movies_Resources.js');
const { expect } = require('chai');

describe('ChristmasMovies', function () {
    it('instantiation', function () {
        let christmas = new ChristmasMovies();

        expect(typeof christmas).to.be.equal('object')
        expect(christmas).to.be.instanceOf(ChristmasMovies)
        expect(christmas.movieCollection).to.deep.equal([]);
        expect(christmas.watched).to.deep.equal({});
        expect(christmas.actors).to.deep.equal([]);
    });
    describe('buyMovie', function () {
        it('add new movie in the collection', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            expect(christmas.movieCollection).to.be.deep.equal([{ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] }]); expect(christmas.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.be.equal('You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!');
            expect(christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding'])).to.be.equal('You just got Last Christmas to your collection in which Emilia Clarke, Henry Golding are taking part!');
        });
        it('movie is already in the collection', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            expect(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.throw(Error, 'You already own Home Alone in your collection!')
        });
    });
    describe('watchMovie', function () {
        it('watching existing movie for first time', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            christmas.watchMovie('Home Alone');
            expect(christmas.watched).to.be.deep.equal({ 'Home Alone': 1 });
            expect(christmas.watched['Home Alone']).to.equal(1);
        });
        it('watching existing movie for more than one time', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            expect(christmas.watched).to.be.deep.equal({'Home Alone': 2 });
            expect(christmas.watched['Home Alone']).to.be.equal(2);
        });
        it('throw is the movie is not in the watched collection', function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.watchMovie('Home Alone')).to.be.throw(Error, 'No such movie in your collection!');
        })
    });
    describe('discardMovie', function () {
        it('remove existing movies from both collections', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            christmas.watchMovie('Home Alone')
            expect(christmas.discardMovie('Home Alone')).to.be.equal('You just threw away Home Alone!');
            expect(christmas.watched).to.be.deep.equal({});
            expect(christmas.movieCollection).to.be.deep.equal([]);
        });
        it('throw when the movie does not exist in one or both collections', function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.discardMovie('Home Alone')).to.throw(Error, 'Home Alone is not at your collection!');
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            expect(() => christmas.discardMovie('Home Alone')).to.throw(Error, 'Home Alone is not watched!');
        });
    });
    describe('favouriteMovie', function () {
        it('there are movie you have watched', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            expect(christmas.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.be.equal('You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('Home Alone 2');
            expect(christmas.favouriteMovie()).to.be.equal('Your favourite movie is Home Alone 2 and you have watched it 2 times!');
        });
        it('you have not watched any movie yet', function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.favouriteMovie()).to.be.throw('You have not watched a movie yet this year!');
        });
    });
    describe('mostStarredActors', function () {
        it('giving the most common actor from the movie collection list', function () {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            expect(christmas.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.be.equal('You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!');
            expect(christmas.mostStarredActor()).to.be.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!');
        });
        it('throw if there is no movies in the collection', function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.mostStarredActor()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
    });
});
