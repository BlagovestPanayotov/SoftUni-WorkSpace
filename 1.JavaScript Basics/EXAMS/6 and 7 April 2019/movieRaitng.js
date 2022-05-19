function filmRating(input) {
    let countMovies = Number(input[0]);
    let bestFilm = '';
    let bestRating = Number.MIN_SAFE_INTEGER;
    let worsFilm = '';
    let lowestRating = Number.MAX_SAFE_INTEGER;
    let index = 1;
    let sumRating = 0;

    for (let i = 0; i < countMovies; i++) {
        let currentFilm = input[index];
        index++;
        let currentRating = Number(input[index]);
        index++;

        if(currentRating>bestRating){
            bestRating=currentRating;
            bestFilm=currentFilm;
        }
        if(currentRating<lowestRating){
            lowestRating=currentRating;
            worsFilm=currentFilm;
        }
        sumRating+=currentRating;
    }

    console.log(`${bestFilm} is with highest rating: ${bestRating.toFixed(1)}`);
    console.log(`${worsFilm} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(sumRating/countMovies).toFixed(1)}`);


}
filmRating(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"]);