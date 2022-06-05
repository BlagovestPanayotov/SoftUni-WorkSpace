function loadingBar(percent) {

    let loadedBar = fillingLoadingBar(percent, createLodindBar());

    if (percent !== 100) {
        console.log(`${percent}% [${loadedBar.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log("100% Complete!");
        console.log(`[${loadedBar.join('')}]`);
    }

    function createLodindBar() {
        return new Array(10).fill('.');
    }

    function fillingLoadingBar(percent, bar) {
        let fieldPercent = Math.floor(percent / 10);

        for (let i = 1; i <= fieldPercent; i++) {
            bar[i - 1] = '%';
        }
        return bar;
    }

}
loadingBar(30);
console.log('---------');
loadingBar(50);
console.log('---------');
loadingBar(100);