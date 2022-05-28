function exam(input) {
    let index = 0;
    let countStudenst = Number(input[index++]);

    let over5 = 0;
    let over4Under5 = 0;
    let over3Under4 = 0;
    let under3 = 0;
    let totalScore = 0;

    for (let i = 0; i < countStudenst; i++) {
        let currentGrade = Number(input[index++]);
        totalScore += currentGrade;
        if (currentGrade >= 5) {
            over5++;
        } else if (currentGrade >= 4) {
            over4Under5++;
        } else if (currentGrade >= 3) {
            over3Under4++;
        } else {
            under3++;
        }
    }

    console.log(`Top students: ${((over5 / countStudenst) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((over4Under5 / countStudenst) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((over3Under4 / countStudenst) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((under3 / countStudenst) * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalScore / countStudenst).toFixed(2)}`);


}
exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
console.log('-----');
exam(["6", "2", "3", "4", "5", "6", "2.2"]);