function armies(input) {

    let leaders = {};

    //iterating the input
    input.forEach(line => {
        if (line.includes('arrives')) {
            let leader = line.replace(' arrives', '');
            leaders[leader] = { totalCount: 0 };

        } else if (line.includes(':')) {
            line = line.split(': ');
            let leader = line[0];
            let [army, count] = line[1].split(', ');
            if (leaders.hasOwnProperty(leader)) {
                leaders[leader][army] = Number(count);
                leaders[leader].totalCount += Number(count);
            }

        } else if (line.includes('+')) {
            let [army, count] = line.split(' + ');
            for (let leader in leaders) {
                if (leaders[leader].hasOwnProperty(army)) {
                    leaders[leader][army] += Number(count);
                    leaders[leader].totalCount += Number(count);
                }
            }

        } else if (line.includes('defeated')) {
            line = line.replace(' defeated', '');
            if (leaders.hasOwnProperty(line)) {
                delete leaders[line];
            }
        }
    });

    //sorting the leaders by total count of army
    let sortedLeaders = Object.entries(leaders).sort((a, b) => b[1].totalCount - a[1].totalCount);
    for(let leader of sortedLeaders){
        let name = leader[0];
        //sorting the armies of each leader
        let armies = Object.entries(leader[1]).sort((a,b)=>b[1]-a[1]);
        //printing the first army of armies because we know that total count of army always will be first(biggest)
        console.log(`${name}: ${armies.shift()[1]}`);
        for(let army of armies){
            console.log(`>>> ${army[0]} - ${army[1]}`);
        }
        
    }
    
}
// armies(['Rick Burr arrives',
//     'Fergus: Wexamp, 30245',
//     'Rick Burr: Juard, 50000',
//     'Findlay arrives',
//     'Findlay: Britox, 34540',
//     'Wexamp + 6000',
//     'Juard + 1350',
//     'Britox + 4500',
//     'Porter arrives',
//     'Porter: Legion, 55000',
//     'Legion + 302',
//     'Rick Burr defeated',
//     'Porter: Retix, 3205']);
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);