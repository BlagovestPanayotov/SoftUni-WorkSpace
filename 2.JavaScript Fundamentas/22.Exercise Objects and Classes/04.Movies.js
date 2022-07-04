function movies(input) {

    let moviesAsObjets = []

    input.forEach(command => {
        if (command.includes('addMovie')) {
            let movie = command.replace('addMovie ', '');
            let film = {
                name: movie,
            };
            moviesAsObjets.push(film);
        } else if (command.includes('directedBy')) {
            let [film, director] = command.split(' directedBy ');
            moviesAsObjets.forEach(movie => {
                if (movie.name === film) {
                    movie.director = director;
                }
            });

        } else if (command.includes('onDate')) {
            let [film, date] = command.split(' onDate ');
            moviesAsObjets.forEach(movie => {
                if (movie.name === film) {
                    movie.date = date;
                }
            });
        }
    });

    moviesAsObjets.forEach(film => {
        if (film.hasOwnProperty('name') && film.hasOwnProperty('director') && film.hasOwnProperty('date')) {
            console.log(JSON.stringify(film));
        }
    });

}


// function movies(input) {

//     let moviesAsObjets = []

//     for (let command of input) {
//         command = command.split(' ');
//         if (command.includes('addMovie')) {
//             let index = command.indexOf('addMovie');
//             let film = {
//                 name: command.splice(index + 1).join(' '),
//             };
//             moviesAsObjets.push(film);
//         } else if (command.includes('directedBy')) {
//             let index = command.indexOf('directedBy');
//             let director = command.splice(index + 1).join(' ');
//             let film = command.splice(0, index).join(' ');
//             addKeyValue(moviesAsObjets, film, 'director', director);
//         } else if (command.includes('onDate')) {
//             let index = command.indexOf('onDate');
//             let date = command.splice(index + 1).join(' ');
//             let film = command.splice(0, index).join(' ');
//             addKeyValue(moviesAsObjets, film, 'date', date);
//         }
//     }

//     for (let film of moviesAsObjets) {
//         if (film.name && film.director && film.date) {
//             console.log(JSON.stringify(film));
//         }
//     }

//     function addKeyValue(moviesAsObjets, name, key, value) {
//         for (let movie of moviesAsObjets) {
//             if (movie.name == name) {
//                 movie[key] = value;
//                 return;
//             }
//         }
//     }


// }



movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
movies(['addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);