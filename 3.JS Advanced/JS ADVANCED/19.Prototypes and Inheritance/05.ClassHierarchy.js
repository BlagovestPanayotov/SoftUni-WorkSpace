function Hierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract');
            }
        }
        changeUnits(value) {
            this.units = value;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            let radius = this._radius;
            switch (this.units) {
                case 'm':
                    radius /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    radius *= 10;
                    break;
                default:
                    break;
            }
            return radius;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            return this.width * this.height;
        }
        get width() {
            let width = this._width;
            switch (this.units) {
                case 'm':
                    width /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    width *= 10;
                    break;
                default:
                    break;
            }
            return width;
        }
        get height() {
            let height = this._height;
            switch (this.units) {
                case 'm':
                    height /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    height *= 10;
                    break;
                default:
                    break;
            }
            return height;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}
