function companyUsers(input){

    let compUsers = {};

    input.forEach(user => {
        user = user.split(' -> ');
        let company = user[0];
        let personID = user[1];
        if(compUsers.hasOwnProperty(company)){
            if(!compUsers[company].includes(personID))
            compUsers[company].push(personID);
        }else{
            compUsers[company]=[personID];
        }
        
    });

    let sorted = Object.keys(compUsers).sort((a,b) => a.localeCompare(b));

    for(let company of sorted){
        console.log(company);
        for(let id of compUsers[company]){
            console.log('-- ' + id);
        }
    }

}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
    // ]);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );