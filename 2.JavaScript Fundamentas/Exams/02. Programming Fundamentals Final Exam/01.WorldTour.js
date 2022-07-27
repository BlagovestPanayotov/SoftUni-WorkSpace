function worldTour(input) {
    let myStops = input.shift();
    input.forEach(line => {
        if (line.includes('Add Stop')) {
            let [command, startIndex, str] = line.split(':');
            if (Number(startIndex) >= 0) {
                let leftCut = myStops.slice(0, Number(startIndex));
                let rightCut = myStops.replace(leftCut, '');
                myStops = leftCut + str + rightCut;
            }
            console.log(myStops);
        } else if (line.includes('Remove Stop')) {
            let [command, startIndex, endIndex] = line.split(':');
            if (Number(startIndex) >= 0 && Number(endIndex) < myStops.length) {
                let leftCut = myStops.slice(0, Number(startIndex));
                let rightCut = myStops.slice(Number(endIndex) + 1);
                myStops = leftCut + rightCut;
            }
            console.log(myStops);

        } else if (line.includes('Switch')) {
            let [command, oldStr, newStr] = line.split(':');
            let pattern = new RegExp(oldStr, 'g');
            myStops = myStops.split(pattern).join(newStr);
            console.log(myStops);
            
        } else if (line === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${myStops}`);
            return;
        }
    });

}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);