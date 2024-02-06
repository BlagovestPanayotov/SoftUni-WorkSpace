// class Component {
//   insertDom() {}
// }

function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("Insetring the component in the DOM");
  };
}

@Component
class ProfileComponent {}
