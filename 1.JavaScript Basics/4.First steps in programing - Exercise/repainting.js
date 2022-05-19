function repainting(input){

    let priceFloorCoverPerSq = 1.5;
    let pricePaintPerLiter = 14.5;
    let priceDiluentPerLiter = 5;
    let priceBags = 0.4;

    let floorCoverSq = Number(input[0]);
    let paintLitters = Number(input[1]);
    let diluentLitters = Number(input[2]);
    let hoursWork = Number(input[3]);

    let extraFloorCover = 2 * priceFloorCoverPerSq;
    let extraPaint = paintLitters * 0.1 * pricePaintPerLiter;

    let suppliesCost = priceFloorCoverPerSq * floorCoverSq + pricePaintPerLiter * paintLitters + 
                        extraPaint + priceDiluentPerLiter * diluentLitters + extraFloorCover + priceBags;
    
    let priceWordPerHour = suppliesCost * 0.3;
    let priceWork = priceWordPerHour * hoursWork;

    let totalCost = suppliesCost + priceWork;

    console.log(totalCost);

}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
);