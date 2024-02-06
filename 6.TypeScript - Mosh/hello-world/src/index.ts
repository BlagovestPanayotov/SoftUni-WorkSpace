// function wrapInArray<T>(value: T) {
//   return [value];
// }

// let number = wrapInArray(1);
// let string = wrapInArray("s");

//////////////

// class ArrayUtils {
//   wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let util = new ArrayUtils();
// let string = util.wrapInArray("s");

///////////////

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let string = ArrayUtils.wrapInArray("s");
