function towns(input) {

    let townsInArr = [];
    for (let town of input) {
        townsInArr.push(town.split(' | '));
    }

    let currentTown = {};

    for (let city of townsInArr) {
        currentTown.town = city[0];
        currentTown.latitude = Number(city[1]).toFixed(2);
        currentTown.longitude = Number(city[2]).toFixed(2);
        console.log(currentTown);
    }

}


// function towns(input) {

//     let townsInArr = [];
//     for (let town of input) {
//         townsInArr.push(town.split(' | '));
//     }


//     let townsInObj = [];

//     for (let city of townsInArr) {
//         let town = city[0];
//         let latitude = Number(city[1]);
//         let longitude = Number(city[2]);

//         townsInObj.push({
//             town: town,
//             latitude: latitude.toFixed(2),
//             longitude: longitude.toFixed(2),
//         });
//     }

//     for (const town of townsInObj) {
//         console.log(town);
//     }

// }


towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);