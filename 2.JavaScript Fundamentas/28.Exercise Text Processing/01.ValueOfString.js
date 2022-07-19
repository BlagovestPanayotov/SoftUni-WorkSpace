function valueOfString(input) {
    let str = input[0];
    let caseType = input[1];

    switch (caseType) {
        case 'LOWERCASE':
            console.log(`The total sum is: ${lowerCaseSum(str)}`);
            break;
        case 'UPPERCASE':
            console.log(`The total sum is: ${upperCaseSum(str)}`);
            break;

    }

    function upperCaseSum(str) {
        let sum = 0;
        for (let char of str) {
            let value = char.charCodeAt(0);
            if (value >= 65 && value <= 90) {
                sum += value;
            }
        }
        return sum;
    }

    function lowerCaseSum(str) {
        let sum = 0;
        for (let char of str) {
            let value = char.charCodeAt(0);
            if (value >= 97 && value <= 122) {
                sum += value;
            }
        }
        return sum;
    }

}
valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);
valueOfString(['AC/DC',
    'UPPERCASE']);