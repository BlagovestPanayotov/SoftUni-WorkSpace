var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        return "Element: Water\n    Sort: ".concat(this.melonSort, "\n    Element Index: ").concat(this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firermelon = /** @class */ (function (_super) {
    __extends(Firermelon, _super);
    function Firermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Firermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Firermelon.prototype.toString = function () {
        return "Element: Fire\n    Sort: ".concat(this.melonSort, "\n    Element Index: ").concat(this.elementIndex);
    };
    return Firermelon;
}(Melon));
var Earthrmelon = /** @class */ (function (_super) {
    __extends(Earthrmelon, _super);
    function Earthrmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Earthrmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Earthrmelon.prototype.toString = function () {
        return "Element: Earth\n    Sort: ".concat(this.melonSort, "\n    Element Index: ").concat(this.elementIndex);
    };
    return Earthrmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        return "Element: Air\n    Sort: ".concat(this.melonSort, "\n    Element Index: ").concat(this.elementIndex);
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._element = ["Water", "Fire", "Earth", "Air"];
        return _this;
    }
    Object.defineProperty(Melolemonmelon.prototype, "element", {
        get: function () {
            return this._element[0];
        },
        enumerable: false,
        configurable: true
    });
    Melolemonmelon.prototype.morph = function () {
        var currentElement = this._element.shift();
        if (currentElement) {
            this._element.push(currentElement);
        }
    };
    return Melolemonmelon;
}(Melon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
