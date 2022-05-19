function personalTitles(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (age < 16) {
        switch (gender) {
            case 'm':
                console.log('Master');
                break;
            case 'f':
                console.log('Miss');
                break;
        }
    } else {
        switch (gender) {
            case 'm':
                console.log('Mr.');
                break;
            case 'f':
                console.log('Ms.');
                break;
        }

    }
}

personalTitles(["12",
    "f"]);