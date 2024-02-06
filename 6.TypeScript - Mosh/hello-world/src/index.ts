class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "a");
let pair2 = new KeyValuePair<string, string>("b", "a");
let pair3 = new KeyValuePair(true, "a");
