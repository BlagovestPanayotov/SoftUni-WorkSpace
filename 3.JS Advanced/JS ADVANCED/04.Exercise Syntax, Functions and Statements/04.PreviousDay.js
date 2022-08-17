function previousDay(year, month, date) {

    let myDate = new Date(`${year}-${month}-${date}`);
    myDate.setDate(myDate.getDate()-1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`);

}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);