class Box<T> {
  private _count: Array<any> = [];

  constructor() {}

  public add(el: T): void {
    this._count.push(el);
  }
  public remove(): void {
    if (this._count.length > 0) {
      this._count.pop();
    }
  }

  get count(): number {
    return this._count.length;
  }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

console.log("---------------");


let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
