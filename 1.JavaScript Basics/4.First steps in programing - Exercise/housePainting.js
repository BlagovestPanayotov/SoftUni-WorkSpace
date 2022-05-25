function housePainting(input){

    let greenPaintCover = 3.4;
    let redPaintCover = 4.3;
    let door = 1.2 * 2;
    let windows = 2 * 1.5 * 1.5;

    let width = Number(input[0]);
    let deepth = Number(input[1]);
    let hignt = Number(input[2]);

    let greenPaintNeeded = 2 * (width*width + width*deepth) - door - windows;
    let redPaintNeeded = 2 * (width*deepth + width*hignt/2);

    let greenPaint = greenPaintNeeded/greenPaintCover;
    let redPaint = redPaintNeeded/redPaintCover;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}

housePainting([10.25,
    15.45,
    8.88])