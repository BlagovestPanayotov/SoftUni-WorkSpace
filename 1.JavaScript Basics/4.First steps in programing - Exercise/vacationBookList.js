function neededHours(input){

    let listsInBook = Number(input[0]);
    let listPetHour = Number(input[1]);
    let days = Number(input[2]);

    let listPerDays = (listsInBook/listPetHour)/days;
    
    console.log(listPerDays);

}

neededHours(["432 ",
"15 ",
"4 "])