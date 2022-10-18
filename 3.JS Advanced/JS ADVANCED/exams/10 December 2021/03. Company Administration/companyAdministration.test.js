const companyAdministration = require('./companyAdministration.js');
const { expect } = require('chai');

describe('companyAdministration', function () {
    describe('hiringEmployee', function () {
        it('must throw an error is position is not "Programmer"', function () {
            expect(() => companyAdministration.hiringEmployee('Pesho', 'Waiter', 5)).to.be.throw(Error, 'We are not looking for workers for this position.')
            expect(() => companyAdministration.hiringEmployee('Pesho', 'Developer', 5)).to.be.throw(Error, 'We are not looking for workers for this position.')
        });
        it('must not hire people with less than 3 years of experience', function () {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 0)).to.be.equal('Pesho is not approved for this position.')
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 1)).to.be.equal('Pesho is not approved for this position.')
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2.99)).to.be.equal('Pesho is not approved for this position.')
        });
        it('hire people matching hte requirement', function () {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.be.equal('Pesho was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3.5)).to.be.equal('Pesho was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 4)).to.be.equal('Pesho was successfully hired for the position Programmer.')
        });
    })
    describe('calculateSalary', function () {
        it('invalid input', function () {
            expect(() => companyAdministration.calculateSalary('10')).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(-10)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary([10])).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(true)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(null)).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary()).to.throw(Error, 'Invalid hours');
        });
        it('must returns the hours multiplied by 15', function () {
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0);
            expect(companyAdministration.calculateSalary(10)).to.be.equal(150);
            expect(companyAdministration.calculateSalary(0.5)).to.be.equal(7.5);
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500);
            expect(companyAdministration.calculateSalary(160)).to.be.equal(2400);
        });
        it('must return the calculated salary with a bonus for over 160 hours',function(){
            expect(companyAdministration.calculateSalary(160.1)).to.be.equal(3401.5);
            expect(companyAdministration.calculateSalary(200)).to.be.equal(4000);
        });
    })
    describe('firedEmployee', function () {
        it('invalid input', function () {
            expect(()=>companyAdministration.firedEmployee(1,["Petar", "Ivan", "George"])).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee('["Petar", "Ivan", "George"]',1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],'1')).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee([["Petar", "Ivan", "George"]],1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],[1])).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(true,1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],true)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(undefined,1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],undefined)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(null,1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],null)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(NaN,1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],NaN)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"])).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee()).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],-1)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee(["Petar", "Ivan", "George"],5)).to.throw(Error,'Invalid input');
            expect(()=>companyAdministration.firedEmployee([],1)).to.throw(Error,'Invalid input');
        })
        it('index out of boundaries', function(){
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0)).to.be.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],1)).to.be.equal('Petar, George');
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],2)).to.be.equal('Petar, Ivan');
        })
    })

})