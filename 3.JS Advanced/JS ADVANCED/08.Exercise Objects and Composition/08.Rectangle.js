function rectangle(width, height, color) {

    let rect = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height;
        }
    };
    rect.color = corectColor(rect.color);
    return rect;

    function corectColor(color) {
        color = color.split('');
        color[0] = color[0].toUpperCase();
        color = color.join('');
        return color;
    }


}

let rect = rectangle(4.2, 5.2, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());