function nextDay(year, month, day) {
    let date = new Date(year,month-1,day+1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth()+1;
    let newDay = date.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);


    // let nextDay = new Date(year, month - 1, day + 1) // removing one unit from the month because the 
    // //month updates to the next one after the current.
    // let newYear = nextDay.getFullYear()
    // let newMonth = nextDay.getMonth() + 1; //now adding one unit to go to the current month
    // let newDate = nextDay.getDate();
    // console.log(`${newYear}-${newMonth}-${newDate}`);


}
nextDay(2016, 9, 30);