function clock() {
    for (let i = 0; i < 24; i++) {
        for (let k = 0; k < 60; k++) {
            console.log(`${i}:${k}`);
        }
    }
}
clock();