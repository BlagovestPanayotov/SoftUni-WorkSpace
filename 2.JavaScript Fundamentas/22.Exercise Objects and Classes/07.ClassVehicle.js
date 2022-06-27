function classVehicle() {

    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = function(){ return this.parts.engine*this.parts.power;};
            this.fuel = fuel;
        }

        drive(fuelLost) {
            this.fuel -= fuelLost;
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

}
classVehicle();





//working code with different ivoking of the function quality(vehicle.parts.quality();)


// function classVehicle() {

//     class Vehicle {
//         constructor(type, model, parts, fuel) {
//             this.type = type;
//             this.model = model;
//             this.parts = parts;

//             this.parts.quality = function () {
//                 let engine = parts.engine;
//                 let power = parts.power;
//                 return engine * power;
//             };
//             this.fuel = fuel;
//         }


//         drive(fuelLost) {
//             this.fuel -= fuelLost;
//         }
//     }

//     let parts = { engine: 6, power: 100 };
//     let vehicle = new Vehicle('a', 'b', parts, 200);
//     vehicle.drive(100);
//     console.log(vehicle.fuel);
//     console.log(vehicle.parts.quality());

// }
// classVehicle();

