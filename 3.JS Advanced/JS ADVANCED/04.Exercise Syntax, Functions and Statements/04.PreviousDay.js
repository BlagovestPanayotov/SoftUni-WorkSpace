function previousDay(...pars) {
    let date = new Date(pars[0], pars[1]-1, pars[2]-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);