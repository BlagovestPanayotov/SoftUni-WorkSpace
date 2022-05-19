function darts(input) {
    let name = input[0];
    let index = 1;
    let succesfulShots = 0;
    let unsuccesfulShots = 0;
    let points = 301;

    while (true) {
        let sector = input[index];
        if (sector === 'Retire') {
            console.log(`${name} retired after ${unsuccesfulShots} unsuccessful shots.`);
            break;
        }
        let currentPoints = input[index + 1];
        switch (sector) {
            case 'Double':
                currentPoints*=2;
                break;
            case 'Triple':
                currentPoints*=3;
                break;
        }
        if(currentPoints<points){
            points-=currentPoints;
            succesfulShots++;
        }else if(currentPoints>points){
            unsuccesfulShots++;
        }else{
            console.log(`${name} won the leg with ${++succesfulShots} shots.`);
            break;
        }

        index += 2;
    }

}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);