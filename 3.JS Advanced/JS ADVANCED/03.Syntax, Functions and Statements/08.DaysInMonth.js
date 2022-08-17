function daysInMonth(month, year){
    let result = new Date(year,month,0);

    console.log(result.getDate());

}
daysInMonth(1, 2012);
daysInMonth(2, 2021);