abstract class Melon {
  weight: number;
  melonSort: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }
}

class Watermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Water
    Sort: ${this.melonSort}
    Element Index: ${this.elementIndex}`;
  }
}

class Firermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Fire
    Sort: ${this.melonSort}
    Element Index: ${this.elementIndex}`;
  }
}

class Earthrmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Earth
    Sort: ${this.melonSort}
    Element Index: ${this.elementIndex}`;
  }
}

class Airmelon extends Melon {
  _elementIndex: number;

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Air
    Sort: ${this.melonSort}
    Element Index: ${this.elementIndex}`;
  }
}

class Melolemonmelon extends Melon {
  _element: Array<string>;
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this._element = ["Water", "Fire", "Earth", "Air"];
  }

  get element() {
    return this._element[0];
  }

  morph(): void {
    const currentElement = this._element.shift();
    if (currentElement) {
      this._element.push(currentElement);
    }
  }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
