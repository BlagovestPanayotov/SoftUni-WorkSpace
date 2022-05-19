function salary(input) {

    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;

    for (let i = 0; i < tabs; i++) {
        let currentTab = input[index];
        index++;
        switch (currentTab) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log('You have lost your salary.');
            break;
        }
    }

    if (salary > 0) {
        console.log(Math.round(salary));

    }

}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);