function townPopulation(input) {

    const result = {}

    for (let line of input) {
        let [city, population] = line.split(' <-> ');
        if (result.hasOwnProperty(city)) {
            population = Number(population);
            population += result[city];
        }
        result[city] = Number(population);
    }

    for(let town in result){
        console.log(`${town} : ${result[town]}`);
    }

}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])