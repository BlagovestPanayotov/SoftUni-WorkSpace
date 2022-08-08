function minerTask(input) {

    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quality = Number(input[i + 1]);
        if (result.hasOwnProperty(resource)) {
            result[resource] += quality;
        } else {
            result[resource] = quality;
        }
    }

    for(let resource in result){
        console.log(resource,'->',result[resource]);
    }
}


// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);