interface Product {
  name: string;
  price: number;
}

// Optional properties
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Nullable propetries
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type ReadOnly<T> = {
  // Index signutare
  // keyof
  readonly [K in keyof T]: T[K];
};

let product: ReadOnly<Product> = {
  name: "a",
  price: 1,
};
