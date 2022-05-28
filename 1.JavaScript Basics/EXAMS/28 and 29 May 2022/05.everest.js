function everest(input) {
    let index = 0;
    let command = input[index++];
    let target = 5364;
    let count = 1;

    while (command !== 'END') {
        if (command === 'Yes') {
            count++;
            if(count>5){
                break;
            }
            target += Number(input[index++]);
        } else {
            target += Number(input[index++]);
        }
        if (target >= 8848) {
            break;
        }
        command = input[index++];
    }

    if (target >= 8848) {
        console.log(`Goal reached for ${count} days!`);
    } else {
        console.log("Failed!");
        console.log(`${target}`);
    }


}
everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"]);
console.log('-----------');
everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"]);
console.log('-----------');
everest((["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
);
console.log('-----------');
everest((["Yes",
"700",
"END"])
);
