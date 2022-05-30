function ladybugs(input) {

    let field = [];
    for (i = 0; i < input[0]; i++) { //creating the field
        field.push(0);
    }
    let fillingIndex = input[1].split(" ");
    for (let i = 0; i < fillingIndex.length; i++) { //filling the field
        let index = Number(fillingIndex[i]);
        if (index >= 0 && index < field.length) {
            field[index] = 1;
        }
    }
    for (let i = 2; i < input.length; i++) { //moving ladybugs
        let currentCommand = input[i].split(" ");
        let movingLadybug = Number(currentCommand[0]); // Separate command from strings
        let direction = currentCommand[1];
        let step = Number(currentCommand[2]);
        if (movingLadybug >= 0 && movingLadybug < field.length && field[movingLadybug] === 1) { //checking in the ladybug is in the field
            if (step < 0) {                                 //Corecting the direction
                step = Math.floor(Math.abs(step));
                if (direction === 'right') {
                    direction = 'left';
                } else {
                    direction = 'right';
                }
            }

            if (direction === 'right') {
                field[movingLadybug] = 0;
                while (field[movingLadybug + step] === 1) {      //increasing the step if needed 
                    step += step;
                }
                if ((movingLadybug + step) < field.length) {    //check if ladybug will land on the field
                    field[movingLadybug + step] = 1;
                }
            } else {
                field[movingLadybug] = 0;
                while (field[movingLadybug - step] === 1) {       //increasing the step if needed
                    step -= step;
                }
                if ((movingLadybug - step) >= 0) {               //check if ladybug will land on the field
                    field[movingLadybug - step] = 1;
                }
            }
        }
    }
    console.log(field.join(' '));

}

ladybugs([10, '0 1 2 3',
    '0 right -1',
    '2 right 1']);