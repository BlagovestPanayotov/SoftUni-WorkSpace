function bonusScoringSystem(input) {
    let attendances = input.slice().map(Number);
    let countStudents = attendances.shift();
    let countLectures = attendances.shift();
    let bonus = attendances.shift();

    let maxBonus = 0;
    let maxAttended = 0;

    for (let i = 0; i < countStudents; i++) {
        let currentBonus = (attendances[i] / countLectures) * (5 + bonus);
        if(currentBonus>maxBonus){
            maxBonus=currentBonus;
            maxAttended=attendances[i];
        }

    }

    

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttended} lectures.`);

}



bonusScoringSystem(['5', '25', '30',
    '12', '19', '24', '16', '20']);
bonusScoringSystem([
    '10', '30', '14',
    '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);