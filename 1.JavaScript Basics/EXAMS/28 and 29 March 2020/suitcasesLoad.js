function suitcasesLoad(input){

    let boothCapacity = Number(input[0]);
    let index = 1;
    let counter = 0;

    while(input[index]!=='End'){
        let currentLuggage = Number(input[index]);
        if(index%3==0){
            currentLuggage *= 1.1;
        }
        boothCapacity -= currentLuggage;
        if(boothCapacity<0){
            break;
        }
        index++;
        counter++;
    }

    if(input[index]==='End'){
        console.log('Congratulations! All suitcases are loaded!');
    }else{
        console.log('No more space!');
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);

}

suitcasesLoad(['550',
    '100',
    '252',
    '72',
    'End']);

suitcasesLoad(['700.5',
    '180',
    '340.6',
    '126',
    '220'])