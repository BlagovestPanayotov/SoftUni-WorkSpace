function bestPlayer(input){

    let bestPlayer = '';
    let bestScore = Number.MIN_SAFE_INTEGER;

    for (let index = 1; index < input.length; index+=2) {
        if(input[index-1]==='END') break;
        let element = Number(input[index]);
        if(element>bestScore){
            bestScore = element;
            bestPlayer = input[index-1];
        }        
    }

    console.log(`${bestPlayer} is the best player!`);
    if(bestScore>=3){
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${bestScore} goals.`);
    }

}

bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"]);