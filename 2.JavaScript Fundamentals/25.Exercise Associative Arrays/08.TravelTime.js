function travelTime(input) {

    let result = {};

    input.forEach(x => {
        x = x.split(' > ');
        let country = x[0];
        let town = x[1];
        let price = Number(x[2]);

        if (result.hasOwnProperty(country)) {
            if (result[country].hasOwnProperty(town)) {
                if (price < result[country][town]) {
                    result[country][town] = price;
                }
            } else {
                result[country][town] = price;
            }

        } else {
            result[country] = { [town]: price };
        }

    });

    let soredCountryNames = Object.keys(result).sort((a, b) => a.localeCompare(b));

    soredCountryNames.forEach(country => {
        let output = country + ' -> '

        let cities = Object.entries(result[country]).sort((a, b) => a[1] - b[1]);
        for (let [town, price] of cities) {
            output += town + ' -> ' + price + ' ';
        }

        console.log(output.trim());
    });


}
// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);