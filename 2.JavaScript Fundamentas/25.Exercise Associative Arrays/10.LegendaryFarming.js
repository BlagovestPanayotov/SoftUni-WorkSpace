function legendaryFarming(input) {
    //creating an array from the input string
    input = input.split(' ');
    //creating asociative array with the inportand key, to make sure
    //--we cover the case if we don't have any income of them
    let storage = {
        fragments: 0,
        shards: 0,
        motes: 0,
    };
    // iterating the input
    for (let i = 0; i < input.length; i += 2) {

        let quantity = Number(input[i]);
        //make the fragments lower case to cover the case sensitive cases
        let resource = input[i + 1].toLowerCase();
        //check if the fragments exist in the storage and adding them
        if (storage.hasOwnProperty(resource)) {
            storage[resource] += quantity;
        } else {
            storage[resource] = quantity;
        }
        //check if we are ready to create legandary item
        if (storage.shards >= 250) {
            storage.shards -= 250;
            console.log('Shadowmourne obtained!');
            break;
        } else if (storage.fragments >= 250) {
            storage.fragments -= 250;
            console.log('Valanyr obtained!');
            break;
        } else if (storage.motes >= 250) {
            storage.motes -= 250;
            console.log('Dragonwrath obtained!');
            break;
        }
    }

    //creating array with the entries, to iterate them
    let sorted = Object.entries(storage);
    //creating arrays for ussful and junk items because we will sort them differently
    let useful = [];
    let junk = [];
    //filling the arrays
    for (let element of sorted) {
        if (element[0] === 'fragments' || element[0] === 'motes' || element[0] === 'shards') {
            useful.push(element);
        } else {
            junk.push(element);
        }
    }
    //sorting the arrays by two criterias each
    junk.sort((a, b) => a[0].localeCompare(b[0]) || b[1] - a[1]);
    useful.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    //printing the fragments and their quantity
    for (let elment of useful) {
        console.log(`${elment[0]}: ${elment[1]}`);
    }
    for (let elment of junk) {
        console.log(`${elment[0]}: ${elment[1]}`);
    }


}



legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');