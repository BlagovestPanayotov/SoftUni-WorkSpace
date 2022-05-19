function fishtank(input){

    let langth = Number(input[0]);
    let whidth = Number(input[1]);
    let deepth = Number(input[2]);
    let percentTakenRoom = Number(input[3]);

    let vomumeCentimeters = langth * whidth * deepth;
    let volumeLitters = vomumeCentimeters / 1000;

    let neededLitters = volumeLitters - volumeLitters*percentTakenRoom/100;

    console.log(neededLitters);

}

fishtank(["105 ",
"77 ",
"89 ",
"18.5 "]);
