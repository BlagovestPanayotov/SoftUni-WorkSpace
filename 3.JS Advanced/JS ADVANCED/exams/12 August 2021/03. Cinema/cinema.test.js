const cinema = require('./cinema.js');
const { expect } = require('chai');

describe('cinema', function () {
    describe('showMovies', function () {
        it('empty array returns a message', function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });
        it('return string of the movies joint by comma and space', function () {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });
    });
    describe('ticketPrice', function () {
        it('invalid input', function () {
            expect(() => cinema.ticketPrice('Student')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('student')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('premiere')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('normal')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('discount')).to.throw(Error, 'Invalid projection type.');
        });
        it('check the price schedule', function () {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
    });
    describe('swapSeatsInHall', function () {
        it('invalid input', function () {
            expect(cinema.swapSeatsInHall('10',11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,'11')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(true,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,true)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,null)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,undefined)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-10,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,-10)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10.5,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,10.5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21,11)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall()).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,1)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('swap the seats',function(){
            expect(cinema.swapSeatsInHall(1,2)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,20)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(11,10)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20,1)).to.be.equal('Successful change of seats in the hall.');
        })
    });
    
});