function modernTimesOfHashTag(input) {
    let words = input.split(" ");
    for (let word of words) {

        if (word.includes("#")
            && word.length > 1) {

            let testingWord = word.substring(1).toLowerCase();
            let hasInvalidChar = false;

            for (let char of testingWord) {
                if (char < 97 || char > 122) {
                    hasInvalidChar = true;
                    break;

                }
            }

            if (!hasInvalidChar) {
                console.log(word.slice(1));
            }
        }
    }

}