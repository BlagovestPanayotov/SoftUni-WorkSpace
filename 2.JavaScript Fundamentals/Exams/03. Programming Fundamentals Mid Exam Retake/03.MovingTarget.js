function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);

    let index = 0;
    let command = input[index++];

    while (command !== "End") {
        let targetIndex;
        let currnetComand = command.split(' ');
        switch (currnetComand[0]) {
            case 'Shoot':
                targetIndex = Number(currnetComand[1]);
                let power = Number(currnetComand[2]);
                if (targetIndex >= 0 && targetIndex < targets.length) {
                    targets[targetIndex] -= power;
                    if (targets[targetIndex] <= 0) {
                        targets.splice(targetIndex, 1);
                    }
                }
                break;
            case 'Add':
                targetIndex = Number(currnetComand[1]);
                let value = Number(currnetComand[2]);
                if (targetIndex >= 0 && targetIndex < targets.length) {
                    targets.splice(targetIndex,0,value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                targetIndex = Number(currnetComand[1]);
                let radius = Number(currnetComand[2]);
                if (targetIndex - radius >= 0 && targetIndex + radius < targets.length) {
                    let targetElements = radius * 2 + 1
                    targets.splice(targetIndex - radius, targetElements);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        command = input[index++];
    }

    console.log(targets.join('|'));

}


// movingTarget(["52 74 23 44 96 110",
//     "Strike 2 1",
//     "End"]);

movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]));
movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"]));