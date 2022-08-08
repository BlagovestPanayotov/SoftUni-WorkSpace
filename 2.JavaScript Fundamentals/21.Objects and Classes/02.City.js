function cityInfo(city) {

    let props = Object.entries(city);

    for (let prop of props){
        console.log(`${prop[0]} -> ${prop[1]}`);
    }
    
}


cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});