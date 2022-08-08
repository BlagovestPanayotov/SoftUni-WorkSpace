function printCertificate(grade, names) {
    if (pass(grade)) {
        printHeader();
        printName(names);
        formatGrade(grade)
    } else {
        console.log('Student does not qualify.');
    }
}

function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}
function printName(names) {
    console.log(names[0] + ' ' + names[1]);

}
function formatGrade(gradeNum) {
    let formatGrade = grade.toFixed(2);
    let desc;

    if (grade < 3) {
        formatGrade = '2';
        desc = 'Fail'
    } else if (grade < 3.5) {
        desc = 'Poor';
    } else if (grade < 4.5) {
        desc = 'Good';
    } else if (grade < 5.5) {
        desc = 'Very good';
    } else {
        desc = 'Excellent';
    }

    console.log(`${desc} (${formatGrade})`);
}
function pass(gradeNum) {
    return grade >= 3;
}

printCertificate(5.25, ['John', 'Smith']);
console.log('----------------');
printCertificate(2.80, ['Gosho', 'Goshev']);