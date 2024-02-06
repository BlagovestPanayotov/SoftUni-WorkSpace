abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(private radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Renderin a circle with radius " + this.radius);
  }
}

let shape = new Shape("red");
shape.render();
