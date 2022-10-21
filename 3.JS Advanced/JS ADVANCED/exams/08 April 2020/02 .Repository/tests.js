let { Repository } = require("./solution.js");
const { expect } = require('chai');

describe("Tests …", function () {
    describe("initialization", function () {
        it("testing properties of instance", function () {
            let properties = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let repository = new Repository(properties);
            expect(repository.props).to.be.deep.equal(properties);
            expect(repository.data).to.be.instanceOf(Map);
            expect(repository.nextId()).to.be.equal(0);
            expect(repository).to.be.instanceOf(Repository);
        });
    });
    describe("testing getter count", function () {
        it("returns the number of sorted entries", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.count).to.be.equal(0);
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.count).to.be.equal(1);
            expect(repository.add(entity)).to.be.equal(1);
            expect(repository.count).to.be.equal(2);
        });
    });
    describe("testing add method", function () {
        it('test with valid entries', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.add(entity)).to.be.equal(1);
        });
        it("validating the entities - missing entities", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            entity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.add(entity)).to.throw(Error, 'Property name is missing from the entity!');
            entity = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.add(entity)).to.throw(Error, 'Property age is missing from the entity!');
            entity = {
                name: "Pesho",
                age: 22,
            };
            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is missing from the entity!');
        });
        it("validating the entities - invalid type entities", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: ["Pesho"],
                age: 22,
                birthday: new Date(1998, 0, 7),
            };
            expect(() => repository.add(entity)).to.throw(Error, 'Property name is not of correct type!');
            entity = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7),
            };
            expect(() => repository.add(entity)).to.throw(Error, 'Property age is not of correct type!');
            entity = {
                name: "Pesho",
                age: 22,
                birthday: '1998, 0, 7',
            };
            expect(() => repository.add(entity)).to.throw(Error, 'Property birthday is not of correct type!');

        });
    });
    describe("testing getId", function () {
        it("return the entity with given ID", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(entity)).to.be.equal(0);
            let anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            };
            expect(repository.add(anotherEntity)).to.be.equal(1);

            expect(repository.getId(0)).to.be.deep.equal(entity);
            expect(repository.getId(1)).to.be.deep.equal(anotherEntity);
        });
        it("throw an error if hte id does not exist", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(entity)).to.be.equal(0);
            let anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            };
            expect(repository.add(anotherEntity)).to.be.equal(1);

            expect(() => repository.getId(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');
            expect(() => repository.getId(10)).to.throw(Error, 'Entity with id: 10 does not exist!');
        });
    });
    describe("testing update", function () {
        it('replace the existing entity with new one on the current index', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.add(entity)).to.be.equal(1);
            anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1998, 0, 7)
            };
            repository.update(0, anotherEntity); //here
            expect(repository.getId(0)).to.be.deep.equal(anotherEntity);
            repository.update(1, anotherEntity);
            expect(repository.getId(1)).to.be.deep.equal(anotherEntity);
        });
        it("throw an error if the id does not exist", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.add(entity)).to.be.equal(1);
            anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.update(2, anotherEntity)).to.throw(Error, 'Entity with id: 2 does not exist!')
            expect(() => repository.update(-1, anotherEntity)).to.throw(Error, 'Entity with id: -1 does not exist!')
        });
        it('validate the new entity', function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(entity)).to.be.equal(0);
            let anotherEntity2 = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1998, 0, 7)
            };
            expect(repository.add(anotherEntity2)).to.be.equal(1);
            let anotherEntity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.update(0, anotherEntity)).to.throw(Error, 'Property name is missing from the entity!');
            anotherEntity = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)
            };
            expect(() => repository.update(0, anotherEntity)).to.throw(Error, 'Property age is missing from the entity!');
            anotherEntity = {
                name: "Pesho",
                age: 22,
            };
            expect(() => repository.update(0, anotherEntity)).to.throw(Error, 'Property birthday is missing from the entity!');
            anotherEntity = {
                name: ["Pesho"],
                age: 22,
                birthday: new Date(1998, 0, 7),
            };
            expect(() => repository.add(anotherEntity)).to.throw(Error, 'Property name is not of correct type!');
            anotherEntity = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7),
            };
            expect(() => repository.add(anotherEntity)).to.throw(Error, 'Property age is not of correct type!');
            anotherEntity = {
                name: "Pesho",
                age: 22,
                birthday: '1998, 0, 7',
            };
            expect(() => repository.add(anotherEntity)).to.throw(Error, 'Property birthday is not of correct type!');
        });
    });
    describe("testing del", function () {
        it("deleting indices", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            let repository = new Repository(properties);
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let anotherEntity = {
                name: 'Stamat',
                age: 29,
                birthday: new Date(1991, 0, 21)
            };
            expect(repository.add(entity)).to.be.equal(0);
            expect(repository.add(anotherEntity)).to.be.equal(1);
            repository.del(1);
            expect(() => repository.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
            expect(repository.getId(0)).to.be.deep.equal(entity);
            expect(() => repository.del(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');
            expect(() => repository.del(5)).to.throw(Error, 'Entity with id: 5 does not exist!');
        });
    });
});