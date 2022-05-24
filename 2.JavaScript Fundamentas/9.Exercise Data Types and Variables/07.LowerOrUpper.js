function lowerOrUpper(letter) {
    let valueLetter = String(letter).charCodeAt(0);
    if (valueLetter <= 90 && valueLetter >= 65) {
        console.log('upper-case');
    } else if (valueLetter <= 122 && valueLetter >= 97) {
        console.log('lower-case');
    }
}
lowerOrUpper('L');
