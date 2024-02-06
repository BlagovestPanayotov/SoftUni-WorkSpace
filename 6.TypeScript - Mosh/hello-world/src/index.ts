function render(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    document.toLowerCase();
  }

  if (document instanceof WordDocument) {
    document.move();
  }
  document.fly();
  document.whateverWeWant();
}
