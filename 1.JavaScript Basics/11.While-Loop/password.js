function password(input) {
    let name = input[0];
    let password = input[1];
    let index = 2;
    let enteredPassword = input[index];
    index++;
    while (enteredPassword !== password) {
        enteredPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);

}
password(["Gosho",
    "secret",
    "secret"]);