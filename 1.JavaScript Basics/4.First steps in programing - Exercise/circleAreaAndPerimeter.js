function circleAreaAndPerimeter(input){

    let radius = Number(input[0]);

    let area = Math.PI * Math.pow(radius,2);

    let perimeter = 2 * Math.PI * radius;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}

circleAreaAndPerimeter([4.5])