function melrahShake(input) {

    let str = input[0];
    let shake = input[1];

    while (str.length > shake.length * 2 || shake.length > 0) {
        if (shakerChecker) {
            while (str.includes(shake)) {
                str = shaker(shake, str);
            }
            console.log('Shaked it.');
            if (shake.length > 1) {
                let cutIndex = shake.length / 2;
                shake = shake.replace(shake[cutIndex], '');
            } else {
                console.log('No shake.');
                console.log(str);
                return;
            }

        } else {
            console.log('No shake.');
            console.log(str);
            return;
        }
    }

    function shakerChecker(shake, str) {
        if (str.includes(shake)) {
            let workingStr = str;
            workingStr = workingStr.replace(shake, '');
            if (workingStr.includes(shake)) {
                let firstHalf = workingStr.slice(0, workingStr.indexOf(shake));
                let secondHalf = workingStr.replace(firstHalf + shake, '');
                workingStr = firstHalf + secondHalf;
                str = workingStr;
                return true;
            }
        }
        return false;
    }

    function shaker(shake, str) {
        if (str.includes(shake)) {
            str = str.replace(shake, '');
            if (str.includes(shake)) {
                let firstHalf = str.slice(0, str.indexOf(shake));
                let secondHalf = str.replace(firstHalf + shake, '');
                str = firstHalf + secondHalf;
                return str;
            }
        }
        return str;
    }
}
/* When you successfully shake off a match, you remove from the pattern the character which corresponds to the index
 equal to the pattern’s length / 2. Then you continue to shake off the border occurrences of the new pattern until 
 the pattern becomes empty or until there is less than the - needed for a shake, matches in the remaining string.
 In case you have found at least two matches, and you have successfully shaken them off, you print "Shaked it." on 
 the console. Otherwise, you print "No shake.", the remains of the main string, and you end the program. See 
 the examples for more info.
Input
• The input will consist only of two lines
• On the first line, you will get a string of random characters
• On the second line, you will receive the pattern and that ends the input sequence
Output
• You must print "Shaked it." for every time you successfully do the melrah shake
• If the melrah shake fails, you print "No shake.", and on the next line you print what has remained of the main string
Constraints
• The two strings may contain ANY ASCII character
• Allowed time/memory: 250ms/16MB
*/


melrahShake(['aaaaaa', 'a']);
// melrahShake(['astalavista baby',
//     'sta']);
// melrahShake(['##mtm!!mm.mm*mtm.#',
//     'mtm']);