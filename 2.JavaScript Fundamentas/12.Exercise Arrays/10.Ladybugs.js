function ladybugs(input) {

    let fieldSize = input.shift();
    let field = new Array(fieldSize).fill(0); //create field


    let fillingIndex = input.shift().split(" ");
    for (let position of fillingIndex) { //filling the field
        let index = position;
        if (index >= 0 && index < field.length) {
            field[index] = 1;
        }
    }

    for (let i = 0; i < input.length; i++) { //moving ladybugs

        let currentCommand = input[i].split(" ");   // Separate command from strings

        let movingLadybug = Number(currentCommand[0]); 
        let direction = currentCommand[1];
        let step = Number(currentCommand[2]);

        if (field[movingLadybug] === 1) { //checking in the ladybug is in the field
            field[movingLadybug] = 0;
            if (step < 0) {                                 //Corecting the direction
                step = Math.floor(Math.abs(step));
                if (direction === 'right') {
                    direction = 'left';
                } else {
                    direction = 'right';
                }
            }
            
            if (direction === 'right') {
                while (field[movingLadybug + step] === 1) {      //increasing the step if needed 
                    step += step;
                }
                if ((movingLadybug + step) < field.length) {    //check if ladybug will land on the field
                    field[movingLadybug + step] = 1;
                }
            } else {
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

ladybugs([5, '0 1 2 3',
    '0 right 0',
    '2 right 0']);