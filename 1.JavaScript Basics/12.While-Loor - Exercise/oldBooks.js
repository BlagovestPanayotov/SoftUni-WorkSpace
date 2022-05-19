function oldBooks(input){
    let wantedBook = input[0];
    let index = 1;
    let currentBook = input[index];
    index++;
    let counter = 0;
    while(currentBook!==wantedBook){
        if(currentBook === 'No More Books'){
            console.log('The book you search is not here!');
            console.log(`You checked ${counter} books.`);
            break;
        }
        counter++;
        currentBook = input[index];
        index++;
    }

    if(currentBook===wantedBook){
        console.log(`You checked ${counter} books and found it.`);
    }

}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);