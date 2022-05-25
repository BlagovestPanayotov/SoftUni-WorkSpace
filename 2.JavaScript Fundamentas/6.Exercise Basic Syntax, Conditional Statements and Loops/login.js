function login(input) {
    let userName = input[0];
    let count = 0;
    let password = userName.split('').reverse().join('');
    for (let i = 1; i <= 4; i++) {
        let prasswordTry = input[i];
        if (prasswordTry === password) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            count++;
            if (count >= 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }

    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])