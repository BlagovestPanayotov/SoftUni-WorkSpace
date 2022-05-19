function trekkingMania(input){

    let countGroups = Number(input[0]);

    let totalCount = 0;
    let countMusala = 0;
    let countMonblan = 0;
    let countCilimanjaro = 0;
    let countK2 = 0;
    let countEverest = 0;

    for (let index = 1; index <= countGroups; index++) {
        let groupCount = Number(input[index]);
        totalCount+=groupCount;
        if(groupCount>=41){
            countEverest+=groupCount;
        }else if(groupCount>=26){
            countK2+=groupCount;
        }else if(groupCount>=13){
            countCilimanjaro+=groupCount;
        }else if(groupCount>=6){
            countMonblan+=groupCount;
        }else{
            countMusala+=groupCount;
        }
    }

    console.log(`${((countMusala/totalCount)*100).toFixed(2)}%`);
    console.log(`${((countMonblan/totalCount)*100).toFixed(2)}%`);
    console.log(`${((countCilimanjaro/totalCount)*100).toFixed(2)}%`);
    console.log(`${((countK2/totalCount)*100).toFixed(2)}%`);
    console.log(`${((countEverest/totalCount)*100).toFixed(2)}%`);
    

}

trekkingMania(['10',
    '10',
    '5',
    '1',
    '100',
    '12',
    '26',
    '17',
    '37',
    '40',
    '78']);