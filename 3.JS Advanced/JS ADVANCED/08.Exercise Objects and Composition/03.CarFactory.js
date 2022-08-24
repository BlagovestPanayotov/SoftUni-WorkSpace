function carFactory(input) {

    let output = JSON.parse(JSON.stringify(input));

    let engine = { power: output.power };
    let carriage = { type: output.carriage, color: output.color };
    let wheels = [0, 0, 0, 0].fill(output.wheelsize % 2 === 0 ? --output.wheelsize : output.wheelsize, 0, 4);;

    if (output.power <= 90) {
        engine.volume = 1800;
        engine.power = 90;
    } else if (output.power <= 120) {
        engine.volume = 2400;
        engine.power = 120;
    } else if (output.power <= 200) {
        engine.volume = 3500;
        engine.power = 200;
    }


    output.engine = engine;
    output.carriage = carriage;
    output.wheels = wheels;
    
    return output;

}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})