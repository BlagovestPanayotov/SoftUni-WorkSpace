function townsToJSON(input) {

    let myInput = input.slice(1);
    let output = [];

    for (let line of myInput) {
        let [_,town, latitude, longitude] = line.split(/\s*\|\s*/);
        output.push({
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        })
    }

    console.log(JSON.stringify(output));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])