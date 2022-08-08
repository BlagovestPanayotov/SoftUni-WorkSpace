function passwordGenerator(input) {

    let charsForAdd = input[2].toUpperCase().split('');
    let password = input[0] + input[1];

    let index = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] == 'a'
            || password[i] == 'e'
            || password[i] == 'u'
            || password[i] == 'o'
            || password[i] == 'i') {
            password = password.replace(password[i], charsForAdd[index]);
            index++;
            if (index == charsForAdd.length) {
                index = 0;
            }
        }
    }

    password = password.split('').reverse().join('');


    console.log(`Your generated password is ${password}`);


}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);
passwordGenerator([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
]);
passwordGenerator([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed'
]);