function requiredReading(pages, pagesPHour, days) {
    let neededHours = pages / pagesPHour;
    let pagesPDay = neededHours / days;
    console.log(pagesPDay);

}
requiredReading(432,
    15,
    4)