function calorieObject(input) {

    let output = {}
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        output[input[i++]] = Number(input[i]);
    }

    console.log(output);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);