function favoriteMovies(input) {
    let index = 0;
    let bestMovie = '';
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let movieCounter = 0;

    while (true) {
        let currentMovie = input[index];
        index++;

        if (currentMovie === 'STOP') {
            break;
        }

        let reducer = 0;
        let currentMoviePoints = 0;
        for (let i = 0; i < currentMovie.length; i++) {
            let pointsChar = currentMovie.charCodeAt(i);
            currentMoviePoints += pointsChar;
            if (pointsChar >= 65 && pointsChar <= 90) {
                reducer++;
            } else if (pointsChar >= 97 && pointsChar <= 122) {
                reducer += 2;
            }
        }

        currentMoviePoints -= reducer * currentMovie.length;
        if (currentMoviePoints > maxPoints) {
            maxPoints = currentMoviePoints;
            bestMovie = currentMovie;
        }

        movieCounter++;
        if(movieCounter>=7){
            console.log('The limit is reached.');
            break;
        }
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`);
    
}
favoriteMovies(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"]);