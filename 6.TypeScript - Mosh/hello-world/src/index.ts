function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const desctiptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be ot least ${length} characters long.`
          );
        }
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, desctiptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("1234");
console.log(user.password);

// user.password = "1";

// let user2 = new User("123");
// console.log(user.password);
