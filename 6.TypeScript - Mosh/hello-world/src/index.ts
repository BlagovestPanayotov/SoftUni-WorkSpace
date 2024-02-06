const small = 1;
const medium = 2;
const large = 3;

// PascalCace
const enum Size {
  Small = 1, //default is 0. If we set naother number in the firest element, we will have the next element in ascending order
  // if we set it to a string, we must scpecify the value of each element
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
