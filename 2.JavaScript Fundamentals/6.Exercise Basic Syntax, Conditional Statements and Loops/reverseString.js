function reverseString(str) {
    str = str.toString();
    console.log(str.split('').reverse().join(''));
}
reverseString('Hello');