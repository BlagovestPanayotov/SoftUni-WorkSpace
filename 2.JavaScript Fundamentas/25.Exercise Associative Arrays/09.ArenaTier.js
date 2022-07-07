function arenaTier(input) {
    let gladiators = {};

    let index = 0;
    let command = input[index++];
    while (command !== 'Ave Cesar') {
        if (command.includes(' -> ')) {
            // adding gladiator
            command = command.split(' -> ');
            let name = command[0];
            let skill = command[1];
            let points = Number(command[2]);

            //check if the gladiator already excist
            if (gladiators.hasOwnProperty(name)) {
                if (gladiators[name].hasOwnProperty(skill)) {

                    //check if the skill already excist
                    if (gladiators[name][skill] < points) {
                        gladiators[name][skill] = points;
                    }
                } else {
                    gladiators[name][skill] = points;
                    //creating total points parametar, because will be needed later
                    gladiators[name].totalPoins += points;
                }
            } else {
                //creating gladiator as associative array
                gladiators[name] = {
                    [skill]: points,
                    totalPoins: points,
                };

            }

        } else {
            //battle phase
            command = command.split(' vs ');
            let nameOne = command[0];
            let nameTwo = command[1];

            //checking for gladiator existing
            if (gladiators.hasOwnProperty(nameOne) &&
                gladiators.hasOwnProperty(nameTwo)) {
                let powerOne = 0;
                let powerTwo = 0;
                
                //we need only matching skills so we take only the skills on one
                //--of the gladiators
                let skillsOne = Object.keys(gladiators[nameOne]);

                //compare the skills of the first gladiator with the skills of
                //--the secon one
                for (let skill of skillsOne) {
                    //checking if the second gladiator has the current skill
                    //--and make sure we cover the case of total points
                    if (skill !== 'totalPoins'
                        && gladiators[nameTwo].hasOwnProperty(skill)) {
                        powerOne += gladiators[nameOne][skill];
                        powerTwo += gladiators[nameTwo][skill];
                    }
                }
                //chek is there is any winner
                if (powerOne > powerTwo) {
                    delete gladiators[nameTwo];
                } else if (powerOne < powerTwo) {
                    delete gladiators[nameOne];
                }


            }

        }

        command = input[index++];
    }

    //sorting the gladiators by their total points
    let gladiatorsAsArr = Object.entries(gladiators).sort((a, b) => b[1].totalPoins - a[1].totalPoins);

    //iretating thruegh the gladiators
    for (let gladiator of gladiatorsAsArr) {
        let name = gladiator[0];
        let totalSkillPoints = gladiators[name].totalPoins;
        //taking the skills of the current gladiator and sorting them
        let skills = Object.entries(gladiator[1]).sort((a,b)=>b[1]-a[1]);

        console.log(`${name}: ${totalSkillPoints} skill`);

        //iretating thruegh the skills
        for (let skill of skills) {
            //make sure we cover the case of total poins
            if (skill[0] !== 'totalPoins') {
                console.log(`- ${skill[0]} <!> ${skill[1]}`);
            }
        }

    }

}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);