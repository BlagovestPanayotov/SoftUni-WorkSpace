function areaAndVolumeCalculator(area, vol, input) {

    const coordinates = JSON.parse(input);

    const result = [];

    coordinates.forEach(x => {
        const currentArea = area.call(x);
        const currentVol = vol.call(x);

        result.push({
            area: currentArea,
            volume: currentVol,
        });
    });

    return result;

}

function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)