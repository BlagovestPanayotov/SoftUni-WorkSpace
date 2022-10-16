class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        });

        this.capacity--;

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find(x => x.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        const index = this.books.findIndex(x => x.bookName === bookName);

        if (index == -1) {
            throw new Error('The book, you\'re looking for, is not found.');
        }

        if (!this.books[index].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            const output = [`The book collection has ${this.capacity} empty spots left.`];

            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(x => output.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`));

            return output.join('\n');
        }

        const output = []
        this.books.forEach(x => {
            if (x.bookAuthor === bookAuthor) {
                output.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`);
            }
        });

        if (output.length === 0) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return output.join('\n');


    }
}



const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

