function dayOfWeek(day) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (day < 1 || day > 7) {
        console.log('Invalid day!');
    } else {
        console.log(weekDays[day - 1]);
    }


}
dayOfWeek(3);