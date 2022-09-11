function areaAndVolumeCalculator(area, vol, str) {

    const parsedStr = JSON.parse(str);

    const result = [];

    for (const obj of parsedStr) {
        const areas = area.call(obj);
        const vols = vol.call(obj);
        result.push({
            area: areas,
            volume: vols,
        });
    }

    return result;

}

