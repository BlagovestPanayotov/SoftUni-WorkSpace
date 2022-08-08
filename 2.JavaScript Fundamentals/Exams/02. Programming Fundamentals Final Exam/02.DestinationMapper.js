function destinationMapper(input) {

    let pattern = /([=\/])(?<name>[A-Z][A-Za-z]{2,})(\1)/g;

    let match = pattern.exec(input);

    let towns = [];
    let points = 0;

    while (match) {
        let currentTown = match.groups.name;
        towns.push(currentTown);
        points+=currentTown.length;
        match = pattern.exec(input);
    }

    console.log(`Destinations: ${towns.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");