function gymnastic(input){
    let country = input[0];
    let discipline = input[1];

    let dificulty = 0;
    let technique = 0;

    switch(country){
        case 'Russia':
            switch(discipline){
                case 'ribbon':
                    dificulty = 9.1;
                    technique = 9.4;
                    break;
                case 'hoop':
                    dificulty = 9.3;
                    technique = 9.8;
                    break;
                case 'rope':
                    dificulty = 9.6;
                    technique = 9;
                    break;
            }
            break;
        case 'Bulgaria':
            switch(discipline){
                case 'ribbon':
                    dificulty = 9.6;
                    technique = 9.4;
                    break;
                case 'hoop':
                    dificulty = 9.55;
                    technique = 9.75;
                    break;
                case 'rope':
                    dificulty = 9.5;
                    technique = 9.4;
                    break;
            }
            break;
        case 'Italy':
            switch(discipline){
                case 'ribbon':
                    dificulty = 9.2;
                    technique = 9.5;
                    break;
                case 'hoop':
                    dificulty = 9.45;
                    technique = 9.35;
                    break;
                case 'rope':
                    dificulty = 9.7;
                    technique = 9.15;
                    break;
            }
            break;
    }

    let score = dificulty+technique;
    let diffPercent = (20-score)*5;

    console.log(`The team of ${country} get ${score.toFixed(3)} on ${discipline}.`);
    console.log(`${diffPercent.toFixed(2)}%`);


}

gymnastic(["Italy",
"hoop"]);