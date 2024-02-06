type ComponentOptions = {
  selector: string;
};

// Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.option = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("Insetring the component in the DOM");
    };
  };
}

@Component({ selector: "#my-profile" })
class ProfileComponent {}
