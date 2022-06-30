function schoolRegister(input) {

    function createStudent(name, grade, averageScore) {
        return {
            name,
            grade,
            averageScore,
        };
    }

    let students = [];

    for (let student of input) {
        student = student.split(', ');
        let name = student[0].split(' ')[2];
        let grade = Number(student[1].split(' ')[1]);
        let averageScore = Number(student[2].split(' ')[5]);
        students.push(createStudent(name, grade, averageScore));
    }

    for (let i = 0; i < students.length; i++) {
        if (students[i].averageScore < 3) {
            students.splice(i, 1);
            i--;
        } else {
            students[i].grade += 1;
        }
    }

    students.sort((a, b) => a.grade - b.grade);



    let gradeChecker = students[0].grade;
    let isNextGrade = true;
    let listStudents = [];
    let avarage = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade == gradeChecker) {
            if (isNextGrade) {
                console.log(`${gradeChecker} Grade`);
                isNextGrade = false;
            }
            listStudents.push(students[i].name);
            avarage += students[i].averageScore;
        } else {
            i--;
            gradeChecker++;
            isNextGrade = true;
            if (listStudents.length>0) {
                console.log(`List of students: ${listStudents.join(', ')}`);
                let averageAnnualScore = avarage / listStudents.length;
                console.log(`Average annual score from last year: ${averageAnnualScore.toFixed(2)}`);
                listStudents = [];
                avarage = 0;
                console.log();
            }
        }

        if (i == students.length - 1) {
            console.log(`List of students: ${listStudents.join(', ')}`);
            let averageAnnualScore = avarage / listStudents.length;
            console.log(`Average annual score from last year: ${averageAnnualScore.toFixed(2)}`);
        }
    }


}


schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
console.log('--------------------------------------');
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);