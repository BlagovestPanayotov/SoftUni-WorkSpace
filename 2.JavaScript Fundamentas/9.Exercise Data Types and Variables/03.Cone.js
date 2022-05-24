function cone(radius, height) {
    let volume = 0;
    let area = 0;

    volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

    let lengthOfSlant = Math.sqrt((Math.pow(radius, 2) + Math.pow(height, 2)));

    area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * lengthOfSlant;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3, 5);
