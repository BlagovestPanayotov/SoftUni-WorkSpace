function sequences(input) {

    let arr = [];
    for (let str of input) {
        arr.push(JSON.parse(str).sort((a, b) => b - a));
    }

    for (let i = 0; i < arr.length; i++) {
        let currArray = JSON.stringify(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            let newArr = JSON.stringify(arr[j]);
            if (currArray === newArr) {
                arr.splice(j, 1);
                j--;
            }
        }
    }

    arr.sort((a, b) => a.length - b.length);

    for (let element of arr) {
        console.log(`[${element.join(', ')}]`);
    }

}


sequences(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13, 1, 2]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]);
sequences(
    [
        "[7.14, 7.180, 7.339, 80.099]",
        "[7.339, 80.0990, 7.140000, 7.18]",
        "[7.339, 7.180, 7.14, 80.099]"
    ]);