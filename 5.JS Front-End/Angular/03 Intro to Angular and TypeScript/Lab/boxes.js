var Box = /** @class */ (function () {
    function Box() {
        this._count = [];
    }
    Box.prototype.add = function (el) {
        this._count.push(el);
    };
    Box.prototype.remove = function () {
        if (this._count.length > 0) {
            this._count.pop();
        }
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._count.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
console.log("---------------");
var box2 = new Box();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
