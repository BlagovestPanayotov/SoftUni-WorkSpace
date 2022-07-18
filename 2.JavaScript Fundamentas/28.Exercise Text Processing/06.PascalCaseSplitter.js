function pascalCaseSplitter(input) {


    let result = "";
    let cut = 0;

    for (let i = 1; i < input.length; i++) {
        if (input.charCodeAt(i) >= 65
            && input.charCodeAt(i) <= 90) {
            result += input.substring(cut, i) + ', ';
            cut = i;
        }
    }
    result += input.substring(cut);

    console.log(result)

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');