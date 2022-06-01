function tseamAccount(input) {
    let accontContent = input[0].split(' ');
    let index = 1;
    let command = input[index++];

    while (command !== 'Play!') {
        command = command.split(' ');
        switch (command[0]) {
            case 'Install':
                if (!accontContent.includes(command[1])) {
                    accontContent.push(command[1]);
                }
                break;
            case 'Uninstall':
                if(accontContent.includes(command[1])){
                    for(let i=0;i<accontContent.length; i++){
                        if(accontContent[i]===command[1]){
                            accontContent.splice(i,1);
                            break;
                        }
                    }
                }
                break;
            case 'Update':
                if(accontContent.includes(command[1])){
                    for(let i=0;i<accontContent.length; i++){
                        if(accontContent[i]===command[1]){
                            accontContent.splice(i,1);
                            break;
                        }
                    }
                    accontContent.push(command[1]);
                }
                break;
            case 'Expansion':
                let game = command[1].split('-')[0];
                if(accontContent.includes(game)){
                    for(let i=0;i<accontContent.length; i++){
                        if(accontContent[i]===game){
                            accontContent.splice(i+1,0,command[1].split('-').join(':'));
                            break;
                        }
                    }
                }
                break;
        }

        command = input[index++];
    }
    console.log(accontContent.join(' '));
}
tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);
console.log('------------');
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);
console.log('------------');
