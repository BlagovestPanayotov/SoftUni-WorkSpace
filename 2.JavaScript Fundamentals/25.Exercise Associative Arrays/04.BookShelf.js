function bookShelf(input) {

    let bookShelf = {};

    for (let line of input) {
        if (line.includes(' -> ')) {
            line = line.split(' -> ');
            let id = line[0];
            let genre = line[1];
            if (bookShelf.hasOwnProperty(id) == false) {
                bookShelf[id] = {
                    'genre': genre,
                    countBooks: 0,
                };
            }
        } else if (line.includes(': ')) {
            line = line.split(': ').map(x => x.split(', '));
            let bookName = line[0];
            let [bookAuthor, bookGenre] = line[1];
            for (let id in bookShelf) {
                if (bookShelf[id].genre == bookGenre) {
                    bookShelf[id][bookName] = bookAuthor;
                    bookShelf[id].countBooks += 1;
                }
            }
        }
    }

    let sorted = Object.entries(bookShelf).sort((a, b) => (b[1].countBooks) - (a[1].countBooks));

    for (let [id, genre] of sorted) {
        console.log(`${id} ${genre.genre}: ${genre.countBooks}`);

        let books = Object.entries(genre).sort();
        books.splice(-2);
        for (let [name, author] of books) {
            console.log(`--> ${name}: ${author}`);
        }
    }

}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);
// bookShelf(['1 -> mystery', '2 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Lions and Rats: Gabe Roads, history',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi']);