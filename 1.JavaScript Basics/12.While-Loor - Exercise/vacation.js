function vacation(input) {
    let target = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let countDays = 0;
    let countSpends = 0;

    while (money < target) {
        let action = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        countDays++;
        switch (action) {
            case 'save':
                money += currentMoney;
                countSpends = 0;
                break;
            case 'spend':
                money -= currentMoney;
                countSpends++;
                break;
        }
        if (money < 0) {
            money = 0;
        }
        if (countSpends === 5) {
            console.log("You can't save the money.");
            console.log(`${countDays}`);
            break;
        }

        if (money >= target) {
            console.log(`You saved the money for ${countDays} days.`);
            break;
        }

    }


}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);