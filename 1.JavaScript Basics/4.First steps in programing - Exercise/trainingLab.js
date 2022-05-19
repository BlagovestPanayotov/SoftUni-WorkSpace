function trainingLab(input){

    let lenghtMeters = Number(input[0]);
    let widthMeters = Number(input[1]);

    const WIDTH_WORKSHOP_METERS = 0.70;
    const LENGHT_WORKSHOP_METERS = 1.20;

    let workshopsInWidth = (widthMeters-1)/WIDTH_WORKSHOP_METERS;
    let workshopsInLenght = (lenghtMeters)/LENGHT_WORKSHOP_METERS;

    let totalWorkshops = (Math.floor(workshopsInWidth) * Math.floor(workshopsInLenght)) - 3;

    console.log(totalWorkshops);

}

trainingLab([8.4,
    5.2])