function melrahShake(input) {

    let [str, shake] = input;

    let arr = str.split(shake);

    while (shake.length > 0) {
        if (arr.length <= 2) {
            break;
        }
        let end = arr.pop();
        str = arr.shift() + arr.join(shake) + end;

        console.log('Shaked it.');

        shake = shake.split('');
        shake.splice(Math.floor(shake.length / 2), 1);
        shake = shake.join('');
        arr = str.split(shake);
    }
    console.log('No shake.');
    console.log(str);

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


// melrahShake(['aaaaaa', 'a']);
melrahShake(['astalavista baby',
    'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']);