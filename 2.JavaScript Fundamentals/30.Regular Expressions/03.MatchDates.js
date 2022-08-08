function matchDates(input) {

    let pattern = /\b\d{2}(\.|-|\/)[A-Z][a-z]{2}\1\d{4}\b/gm;

    let match = pattern.exec(input);

    let dates = [];

    while (match !== null) {
        dates.push(match[0]);
        match = pattern.exec(input);
    }

    for(let date of dates){
        date = date.split(/\.|-|\//gm);
        console.log(`Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2]}`);
    }

}
matchDates('13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016');
matchDates('1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014');