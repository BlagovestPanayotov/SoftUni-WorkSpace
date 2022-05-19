function examPreperation(input) {
    let allowedBadGrade = Number(input[0]);
    let index = 1;
    let currentProblem = input[index];
    index++;

    let countProblems = 0;
    let badGradeCount = 0;
    let isTired = false;
    let sumGrade = 0;
    let lastProblem = '';

    while (currentProblem !== 'Enough') {
        countProblems++;
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade <= 4) {
            badGradeCount++;
            if (badGradeCount === allowedBadGrade) {
                console.log(`You need a break, ${badGradeCount} poor grades.`);
                isTired = true;
                break;
            }
        }
        lastProblem = currentProblem;
        sumGrade += currentGrade;
        currentProblem = input[index];
        index++;
    }

    let avarageGrade = sumGrade / countProblems;
    if (!isTired) {
        console.log(`Average score: ${avarageGrade.toFixed(2)} `);
        console.log(`Number of problems: ${countProblems} `);
        console.log(`Last problem: ${lastProblem} `);
    }


}
examPreperation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);