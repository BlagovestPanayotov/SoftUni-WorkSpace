function schoolLibrary(input) {

    let bookShelf = input.shift().split('&');

    let index = 0;
    let commnad = input[index++];

    while (commnad !== 'Done') {
        let currentCommnad = commnad.split(' | ');
        switch (currentCommnad[0]) {
            case 'Add Book':
                if (!bookShelf.includes(currentCommnad[1])) {
                    bookShelf.unshift(currentCommnad[1]);
                }
                break;
            case 'Take Book':
                if (bookShelf.includes(currentCommnad[1])) {
                    let indexBook = bookShelf.indexOf(currentCommnad[1]);
                    bookShelf.splice(indexBook, 1);
                }
                break;
            case 'Swap Books':
                if (bookShelf.includes(currentCommnad[1])
                    && bookShelf.includes(currentCommnad[2])) {
                    let indexBookOne = bookShelf.indexOf(currentCommnad[1]);
                    let indexBookTwo = bookShelf.indexOf(currentCommnad[2]);
                    let token = bookShelf[indexBookOne];
                    bookShelf[indexBookOne] = bookShelf[indexBookTwo];
                    bookShelf[indexBookTwo] = token;
                }
                break;
            case 'Insert Book':
                if (!bookShelf.includes(currentCommnad[1])) {
                    bookShelf.push(currentCommnad[1]);
                }
                break;
            case 'Check Book':
                {
                    let indexOfBook = Number(currentCommnad[1]);
                    if (indexOfBook >= 0 && indexOfBook < bookShelf.length) {
                        console.log(bookShelf[indexOfBook]);
                    }
                }
                break;
        }

        commnad = input[index++];
    }

    console.log(bookShelf.join(', '));

}



schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
        "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
        "Take Book | David Copperfield",
    "Done"]);
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);