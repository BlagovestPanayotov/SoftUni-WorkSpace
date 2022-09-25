function argumentInfo() {

    const args = Array.from(arguments);
    const counter = {};
    for (const arg of args) {
        const currentType = typeof arg;
        console.log(`${currentType}: ${arg}`);
        if (!counter.hasOwnProperty(currentType)) {
            counter[currentType] = 0;
        }
        counter[currentType]++;
    }
    Object.entries(counter)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => console.log(`${x[0]} = ${x[1]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });