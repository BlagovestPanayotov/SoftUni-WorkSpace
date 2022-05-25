function oscarWeek(input) {
    let movie = input[0];
    let ticket = input[1];
    let countPPL = Number(input[2]);

    let income = 0;

    switch (movie) {
        case 'A Star Is Born':
            switch (ticket) {
                case 'normal':
                    income += countPPL * 7.5;
                    break;
                case 'luxury':
                    income += countPPL * 10.5;
                    break;
                case 'ultra luxury':
                    income += countPPL * 13.5;
                    break;
            }
            break;
        case 'Bohemian Rhapsody':
            switch (ticket) {
                case 'normal':
                    income += countPPL * 7.35;
                    break;
                case 'luxury':
                    income += countPPL * 9.45;
                    break;
                case 'ultra luxury':
                    income += countPPL * 12.75;
                    break;
            }
            break;
        case 'Green Book':
            switch (ticket) {
                case 'normal':
                    income += countPPL * 8.15;
                    break;
                case 'luxury':
                    income += countPPL * 10.25;
                    break;
                case 'ultra luxury':
                    income += countPPL * 13.25;
                    break;
            }
            break;
        case 'The Favourite':
            switch (ticket) {
                case 'normal':
                    income += countPPL * 8.75;
                    break;
                case 'luxury':
                    income += countPPL * 11.55;
                    break;
                case 'ultra luxury':
                    income += countPPL * 13.95;
                    break;
            }
            break;
    }

    console.log(`${movie} -> ${income.toFixed(2)} lv.`);

}
oscarWeek(["Green Book",
    "normal",
    "63"]);